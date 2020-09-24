import json
import urllib.request
from urllib.request import Request, urlopen






class bithumb:
    def __init__(self):
        self.urlTicker = urllib.request.urlopen('https://api.bithumb.com/public/ticker/all')
        self.readTicker = self.urlTicker.read()
        self.jsonTicker = json.loads(self.readTicker)
        FindBTC = self.jsonTicker['data']['BTC']['closing_price']
        self.BTC = int(float(FindBTC))
        FindETH = self.jsonTicker['data']['ETH']['closing_price']
        self.ETH = int(float(FindETH))
        FindDASH = self.jsonTicker['data']['DASH']['closing_price']
        self.DASH = int(float(FindDASH))
        FindLTC = self.jsonTicker['data']['LTC']['closing_price']
        self.LTC = int(float(FindLTC))
        FindETC = self.jsonTicker['data']['ETC']['closing_price']
        self.ETC = int(float(FindETC))
        FindXRP = self.jsonTicker['data']['XRP']['closing_price']
        self.XRP = int(float(FindXRP))

class coinone:
    def __init__(self):
        self.urlTicker = urllib.request.urlopen('https://api.coinone.co.kr/ticker/?currency=all')
        self.readTicker = self.urlTicker.read()
        self.jsonTicker = json.loads(self.readTicker)
        FindETC = self.jsonTicker['etc']['last']
        self.ETC = int(float(FindETC))
        FindBTC = self.jsonTicker['btc']['last']
        self.BTC = int(float(FindBTC))
        FindETH = self.jsonTicker['eth']['last']
        self.ETH = int(float(FindETH))
        FindXRP = self.jsonTicker['xrp']['last']
        self.XRP = int(float(FindXRP))



class korbit:
    def __init__(self):
        self.reqBTC = Request('https://api.korbit.co.kr/v1/ticker?currency_pair=btc_krw' , headers={'User-Agent': 'Mozilla/5.0'})
        self.readBTC = urlopen(self.reqBTC).read()
        jsonBTC = json.loads(self.readBTC)
        FindBTC = jsonBTC['last']
        self.BTC = int(float(FindBTC))
        self.reqETH = Request('https://api.korbit.co.kr/v1/ticker?currency_pair=eth_krw' , headers={'User-Agent': 'Mozilla/5.0'})
        self.readETH = urlopen(self.reqETH).read()
        jsonETH = json.loads(self.readETH)
        FindETH = jsonETH['last']
        self.ETH = int(float(FindETH))
        self.reqETC = Request('https://api.korbit.co.kr/v1/ticker?currency_pair=etc_krw' , headers={'User-Agent': 'Mozilla/5.0'})
        self.readETC = urlopen(self.reqETC).read()
        jsonETC = json.loads(self.readETC)
        FindETC = jsonETC['last']
        self.ETC = int(float(FindETC))
        reqXRP = Request('https://api.korbit.co.kr/v1/ticker?currency_pair=xrp_krw' , headers={'User-Agent': 'Mozilla/5.0'})
        readXRP = urlopen(reqXRP).read()
        jsonXRP = json.loads(readXRP)
        FindXRP = jsonXRP['last']
        self.XRP = int(float(FindXRP))


if __name__ == "__main__":

    print("리플 : {}원".format(coinone.XRP))
    print("이더리움 : {}원".format(coinone.ETH))
    print("비트코인 : {}원".format(coinone.BTC))