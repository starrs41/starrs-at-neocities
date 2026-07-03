import json
import argparse
from datetime import datetime
from pathlib import Path
import miiverse_individual_templates as templates

input_folder = "../data"
output_folder = "../../../site/tinyspace/miiverse"

mii_list = {}
personality_list = {}
quirk_list = {}
gallery_list = {}

with open(f"{input_folder}/miis.json") as f:
  mii_list = json.load(f)

with open(f"{input_folder}/personality.json") as f:
  personality_list = json.load(f)

with open(f"{input_folder}/quirk.json") as f:
  quirk_list = json.load(f)

with open(f"{input_folder}/gallery.json") as f:
  gallery_list = json.load(f)


def populate_personality(mii):
  slug = mii["personality"]
  name = personality_list[slug]["name"]
  description = personality_list[slug]["description"]
  
  return templates.personality_template.strip().format(slug=slug, name=name, description=description)


def populate_quirks(mii):
  all_quirk_blocks = []
  
  for quirk in mii["quirks"]:
    name = quirk
    category = quirk_list[quirk]["category"]
    quirk_block = templates.quirk_template.rstrip().format(category=category, alt=category.title(), name=name)
    all_quirk_blocks.append(quirk_block)

  return "".join(all_quirk_blocks).lstrip()


def populate_details(mii):
  all_detail_blocks = []
  
  for detail in mii["details"]:
    if not detail == "trivia":
      label = detail.title()
      info = mii["details"][detail]
      detail_block = templates.detail_template.rstrip().format(label=label, info=info)
      all_detail_blocks.append(detail_block)
  
  return "".join(all_detail_blocks).lstrip()


def populate_trivia(mii):
  all_trivia_blocks = []
  
  for trivia in mii["details"]["trivia"]:
    trivia_block = templates.trivia_item_template.rstrip().format(content=trivia)
    all_trivia_blocks.append(trivia_block)
  
  return "".join(all_trivia_blocks).lstrip()


def get_gallery_items(mii):
    slug = mii["slug"]
    all_items = []

    for item in gallery_list:
      if slug in item["miis"]:
        all_items.append(item)
    
    return all_items


def populate_thumbnails(items):
  all_thumbnail_blocks = []
  
  for item in items:
    thumbnail_block = templates.thumbnail_template.rstrip().format(category=item["category"], filename=item["filename"], alt=item["alt"])
    all_thumbnail_blocks.append(thumbnail_block)
  
  return "".join(all_thumbnail_blocks).lstrip()


def populate_lightbox_info(items):
  all_info_blocks = []
  
  for item in items:
    info_block = templates.lightbox_info_template.rstrip().format(info=item["description"])
    all_info_blocks.append(info_block)
  
  return "".join(all_info_blocks).lstrip()


def populate_pictures(items):
  all_picture_blocks = []
  
  for item in items:
    picture_block = templates.picture_template.rstrip().format(filename=item["filename"], alt=item["alt"])
    all_picture_blocks.append(picture_block)
  
  return "".join(all_picture_blocks).lstrip()


def create_individual_page(mii):
  personality = populate_personality(mii)
  quirks = populate_quirks(mii)
  details = populate_details(mii)
  trivia = populate_trivia(mii)
  gallery_items = get_gallery_items(mii)
  thumbnails = populate_thumbnails(gallery_items)
  lightbox_info = populate_lightbox_info(gallery_items)
  pictures = populate_pictures(gallery_items)
  
  final_content = templates.main_template.strip().format(name=mii["name"], description=mii["description"], personality=personality, quirks=quirks, details=details, trivia=trivia, thumbnails=thumbnails, lightbox_info=lightbox_info, pictures=pictures, date=datetime.today().strftime("%B %d, %Y"))
  
  final_directory = f"{output_folder}/{mii["slug"]}/index.html"
    
  final_file = Path(final_directory)
  final_file.parent.mkdir(exist_ok=True, parents=True)
  final_file.write_text(final_content)
  
  print(f"Page for {mii["name"]} created in {final_directory}")


def create_individual_pages():
  for mii in mii_list:
    create_individual_page(mii)


parser = argparse.ArgumentParser()
parser.add_argument("-t", "--test")
args = parser.parse_args()

if __name__ == '__main__':
  if (args.test == None):
    create_individual_pages()
  else:
    for mii in mii_list: # this may tank performance later on when there are more miis
      if mii["slug"] == args.test:
        create_individual_page(mii)