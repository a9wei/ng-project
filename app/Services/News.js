// Main script & template
'use strict';

angular.module('app.services.News', [])
  .factory('News', ['$http', function($http) {
      var news = [{
          "id": 1001,
          "name": "大學畢業生28K 薪資倒退16年",
          "source": "http://udn.com/news/story/7238/1732591-%E5%A4%A7%E5%AD%B8%E7%95%A2%E6%A5%AD%E7%94%9F28K-%E8%96%AA%E8%B3%87%E5%80%92%E9%80%8016%E5%B9%B4",
          "description": "勞動部昨公布年度職類別薪資大調查，其中大學畢業生去年平均起薪為二萬七六五五元，雖較前年"
      }, {
          "id": 1002,
          "name": "洪慈庸學歷低？黃國昌反擊藍議員　馬英九也被拖下水",
          "source": "http://www.setn.com/News.aspx?NewsID=151556",
          "description": "國民黨台北市議員王欣儀昨（30）日質疑時代力量立委洪慈庸「憑妳的學經歷為什麼會當選立委？」言論引發網友砲轟，連同黨戰友也發"
      }];

      return {
          all: function() {
              return news;
          }
      }
  }]);
