해당 프로젝트는 TS + Nest.js + MongoDB를 모두 처음 사용하면서 사용법을 익히기 위하여 만든 프로젝트입니다.

# 설계
## DB
### Evnet
```json
{
    "eventName" : "string",     // 이벤트 이름
    "eventCondition": "string", // 이벤트 조건
    "startDate" : "Date",       // 시작 날짜
    "endDate" : "Date",         // 종료 날짜
    "status" : "boolean"        // 현재 진행중인지
}
```

### Award
```json
{
    "awardName" : "string",     // 보상 이름
    "eventId" : "event.id",     // 이벤트 ID
    "point" : "number",         // 보상 포인트
    "item" : "string",          // 보상 아이템
}
```


1. 이벤트 등록

2. 이벤트 조회

3. 보상 등록

4. 보상 조회

5. 유저 보상 요청

6. 유저 보상 내역 조회