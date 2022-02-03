# 제목

## 프로젝트

* app
    * api
    * admin
    * batch
* lib
    * common
    * model

## 패키지 경로 규칙

---

<table>
  <tr>
    <td>경로</td>
    <td>하위경로</td>
    <td>명명규칙</td>
    <td>설명</td>
  </tr>

  <tr>
    <td>configuration</td>
    <td></td>
    <td>~.configuration</td>
    <td>설정파일</td>
  </tr>
  <tr>
    <td rowspan="2">domain</td>
    <td></td>
    <td>명사.entity</td>
    <td>도메인</td>
  </tr>
  <tr>
    <td>enumable</td>
    <td>명사.enum</td>
    <td>열거형</td>
  </tr>
  <tr>
    <td>{domain}/repository</td>
    <td></td>
    <td>~.repository</td>
    <td>리포지토리</td>
  </tr>
  <tr>
    <td>{domain}/service</td>
    <td></td>
    <td>~.service</td>
    <td>서비스</td>
  </tr>
  <tr>
    <td>{domain}/controller</td>
    <td></td>
    <td>~.controller</td>
    <td>컨트롤러</td>
  </tr>
  <tr>
    <td>{domain}/controller/dto</td>
    <td></td>
    <td>~.dto</td>
    <td>데이터 전송객체</td>
  </tr>
  <tr>
    <td rowspan="3">{domain}/adaptor</td>
    <td>client</td>
    <td>~.client</td>
    <td>클라이언트 동기 아웃바운드 처리</td>
  </tr>
  <tr>
    <td>consumer</td>
    <td>~.consumer</td>
    <td>비동기 인바운드 수신 처리</td>
  </tr>
  <tr>
    <td>producer</td>
    <td>~.producer</td>
    <td>비동기 아웃바운드 전송</td>
  </tr>
  <tr>
    <td>filter</td>
    <td></td>
    <td>~.filter</td>
    <td>필터</td>
  </tr>
  <tr>
    <td>middlewares</td>
    <td></td>
    <td>~.middlewares</td>
    <td>미들웨어</td>
  </tr>
  <tr>
    <td>res</td>
    <td></td>
    <td></td>
    <td>공통 ResponseData</td>
  </tr>
</table>
