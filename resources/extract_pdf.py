import sys
import subprocess
import os

def install(package):
    subprocess.check_call([sys.executable, "-m", "pip", "install", package])

try:
    import pypdf
except ImportError:
    print("Installing pypdf...")
    try:
        install("pypdf")
        import pypdf
    except Exception as e:
        print(f"Failed to install pypdf: {e}")
        sys.exit(1)

file_path = "Parise Ashish (2).pdf"
if not os.path.exists(file_path):
    print(f"File not found: {file_path}")
    sys.exit(1)

try:
    reader = pypdf.PdfReader(file_path)
    text = ""
    for page in reader.pages:
        text += page.extract_text() + "\n"

    with open("resume_content.txt", "w", encoding="utf-8") as f:
        f.write(text)
    print("Content written to resume_content.txt")
except Exception as e:
    print(f"Error reading PDF: {e}")
