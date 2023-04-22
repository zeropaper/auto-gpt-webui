#!/bin/bash
git clone git@github.com:Significant-Gravitas/Auto-GPT.git auto-gpt
git -C auto-gpt checkout stable
pip install -r auto-gpt/requirements.txt
