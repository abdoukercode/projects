import csv
from datetime import datetime
#print(dir(csv))

path = "/home/abdou/project/python/csv/Google Stock Market Data - google_stock_data.csv"
# open file
file = open(path, newline='')
#parse data in the file
reader = csv.reader(file)
# extract first line which does not contain  data
header = next(reader)
# read the remaining data   
#data = [ row for row in reader]

print(header)
print('///////////')
#print(data[0])


data = []
for row in reader:
    # row = ['Date', 'Open', 'High', 'Low', 'Close', 'Volume', 'Adj Close']
    # lets convert data in good format
    date = datetime.strptime(row[0], '%m/%d/%Y')
    open_price = float(row[1]) # 'open' is name of a python built in function
    high = float(row[2])
    low = float(row[3])
    close = float(row[4])
    volume = int(row[5])
    adj_close = float(row[6])

    data.append([date, open_price, high,low,close,volume,adj_close])

print(data[0])

# compute daily return

returns_path = '/home/abdou/project/python/csv/google_stock_returns.csv'
file = open(returns_path, 'w')
writer = csv.writer(file)
writer.writerow(['Date', 'Return'])

for i in range(len(data) - 1):
    todays_row =data[i]
    todays_date= todays_row[0]
    todays_price = todays_row[-1]
    yesterday_row= data[i+1]
    yesterday_price = yesterday_row[-1]

    daily_return = (todays_price - yesterday_price)/yesterday_price
    #writer.writerow([todays_date, daily_return])
    formatted_date = todays_date.strftime('%m/%d/%Y')
    writer.writerow([formatted_date, daily_return])
    