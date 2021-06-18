'''
Endpoint analysis:
Analysis of https://covid19.mathdro.id/api/countries
'''

import pandas as pd

df = pd.read_json('./data/countries.json')

df = df["countries"]

