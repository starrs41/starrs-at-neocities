import json
from datetime import datetime
from pathlib import Path
import miiverse_index_templates as templates

input_folder = "../data"
output_folder = "../../../site/tinyspace/miiverse"

mii_list = {}

with open(f"{input_folder}/miis.json") as f:
  mii_list = json.load(f)


def populate_links():
  all_link_blocks = []
  
  for mii in mii_list:
    name = mii["name"]
    slug = mii["slug"]
    thumbnail = mii["thumbnail"]
    link_block = templates.link_template.rstrip().format(name=name, slug=slug, thumbnail=thumbnail)
    all_link_blocks.append(link_block)
    
  return "".join(all_link_blocks).lstrip()


def create_index_page():
  links = populate_links()
  
  final_content = templates.main_template.strip().format(links=links, date=datetime.today().strftime("%B %d, %Y"))
  final_directory = f"{output_folder}/index.html"
  
  final_file = Path(final_directory)
  final_file.parent.mkdir(exist_ok=True, parents=True)
  final_file.write_text(data=final_content, encoding="utf-8")
  
  print(f"Miiverse index page created in {final_directory}")

if __name__ == '__main__':
  create_index_page()