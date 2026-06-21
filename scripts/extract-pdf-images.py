"""Render the product-details PDF pages to optimized JPEGs for inline display.

Requires PyMuPDF:  python -m pip install pymupdf
Run:               python scripts/extract-pdf-images.py
Outputs:           public/images/details/detail-<name>.jpg

Page 2 of the source PDF is an internal research note that references a competitor
model ("Cimuka model for reference") with a supplier watermark, so it is intentionally
omitted from the public site. Add 2 to PAGE_MAP to include it.
"""
import os
import fitz  # PyMuPDF

SRC = "assets/source/Chicken-Coop-Full-Product-Details.pdf"
OUT = "public/images/details"
ZOOM = 2.5          # render scale (page ~960x540 pt -> ~2400x1350 px)
JPEG_QUALITY = 82

# 1-based PDF page number -> output slug (page 2 intentionally excluded)
PAGE_MAP = {
    1: "floorplan",
    3: "interior-cutaway",
    4: "exterior-render",
    5: "section-ventilation",
    6: "section-long",
    7: "section-water",
    8: "interior-3d",
}

os.makedirs(OUT, exist_ok=True)
doc = fitz.open(SRC)
for page_no, slug in PAGE_MAP.items():
    page = doc[page_no - 1]
    pix = page.get_pixmap(matrix=fitz.Matrix(ZOOM, ZOOM))
    path = os.path.join(OUT, f"detail-{slug}.jpg")
    pix.save(path, jpg_quality=JPEG_QUALITY)
    kb = os.path.getsize(path) // 1024
    print(f"p{page_no} -> detail-{slug}.jpg  {pix.width}x{pix.height}  {kb} KB")
print(f"done: {len(PAGE_MAP)} pages -> {OUT}")
