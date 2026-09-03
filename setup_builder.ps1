import os

with open('generate_app.py', 'w', encoding='utf-8') as f:
    f.write('''# Build script for ShiftSync NOC & DevOps Handover Engine
import sys

def build():
    print('Generating index.html...')
''')
