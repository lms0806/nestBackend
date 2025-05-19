import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

@Injectable()
export class EventService {
  /**
   * 이벤트 등록
   * 아이디, 이벤트 이름, 이벤트 조건, 상태(bool)
   * @returns x
   */
  getEvent(): string {
    return 'get event';
  } // DB select eventList

  /**
   * 이벤트 생성
   * 아이디, 이벤트 이름, 이벤트 조건, 상태(bool) = true
   * @returns x
   */
  makeEvent(): string {
    return 'make event';
  } // DB insert eventList
}

@Injectable()
export class AwardService {
  /**
   * 보상 조회
   * 아이디, 이벤트 이름, 보상 아이템 정보
   * @returns x
   */
  getAward(): string {
    return 'get award';
  } // DB select awardList

  /**
   * 보상 등록
   * 아이디, 이벤트 이름, 보상 아이템 정보
   * @returns x
   */
  makeAward(): string {
    return 'make award';
  } // DB insert awardList

  /**
   * 유저 보상 요청
   * 아이디, 이벤트 아이디, 유저 아이디, 지급 여부
   * @returns x
   */
  getUserAward(): string {
    return 'get user award';
  } // DB insert userAwardList

  /**
   * 보상 요청 내역 확인
   * 아이디, 이벤트 아이디, 유저 아이디, 지금 여부
   * @returns x
   */
  getUserAwardLog(): string {
    return 'get user award log';
  } // DB select userArawdList
}