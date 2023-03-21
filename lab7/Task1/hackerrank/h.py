if __name__ == '__main__':
    n = int(input())
    student_marks = {}
    for _ in range(n):
        name, *line = input().split()
        scores = list(map(float, line))
        student_marks[name] = scores
    query_name = input()
    cnt=0
    for x, k in student_marks.items():
        if x == query_name:
            cnt = student_marks[x][0]+student_marks[x][1]+student_marks[x][2]
    print('{:.2f}'.format(cnt/3))