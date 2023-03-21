a = int(input())
b = ''
for x in str(a)[::-1]:
    if x == '0': continue
    else: b += x

print(int(b))