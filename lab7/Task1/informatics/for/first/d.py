n = int(input())

k = int(input())

cnt, cnt2, cnt3 = 1,1,1

for x in range(1, n+1):
    cnt = cnt * x

for x in range(1, k+1):
    cnt2 = cnt2 * x

for x in range(1, n-k+1):
    cnt3 = cnt3 * x

print(int(cnt/(cnt2 * cnt3)))
