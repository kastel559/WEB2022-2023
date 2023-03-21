if __name__ == '__main__':
    n = int(input())
    arr = map(int, input().split())
    l = sorted(list(arr))
    max = -10006
    for x in l:
        if max < x: max = x

    for x in l[::-1]:
        if max != x:
            print(x)
            break