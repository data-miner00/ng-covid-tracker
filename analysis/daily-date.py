'''
Endpoint analysis:
Analysis of https://covid19.mathdro.id/api/daily/:date

Format of :date
	mm?-dd?-YYYY
eg. 2-14-2021, 1-2-2021
'''

import pandas as pd

df = pd.read_json("./data/daily-date.json")

df.columns

df.isna().sum(axis=0)

df.dtypes