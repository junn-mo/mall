<template>
  <div v-if="Object.keys(commentInfo).length !==0" class="comment-info">
    <div class="info-header">
      <div class="header-title">用户评价</div>
      <div class="header-more">更多</div>
    </div>
    <div class="infor-user">
      <img :src="commentInfo.user.avatar" alt />
      <span>{{commentInfo.user.uname}}</span>
    </div>
    <div class="info-detail">
      <p>{{commentInfo.content}}</p>
      <div class="info-other">
        <div class="date">{{datetime(commentInfo.created)}}</div>
        <span>{{commentInfo.style}}</span>
      </div>
      <div class="info-imgs">
        <img :src="item" v-for="(item,index) in commentInfo.images" :key="index" />
      </div>
    </div>
  </div>
</template>

<script>
import { formatDatetime } from "common/utils";

export default {
  name: "DetailCommentInfo",
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    datetime() {
      return function (value) {
        //1、将时间戳转换成Date对象
        const date = new Date(value * 1000);
        //2、将date进行格式化
        return formatDatetime(date, "yyyy-MM-dd");
      };
    },
  },
};
</script>

<style scoped>
.info-header {
  margin: 10px;
  display: flex;
  height: 40px;
  font-size: var(--font-size);
  font-weight: 800;
  align-items: center;
  border-bottom: 1px solid rgba(204, 204, 204, 0.6);
}
.header-title {
  flex: 1;
  text-align: left;
}
.header-more {
  flex: 1;
  text-align: right;
}

.infor-user {
  margin: 0 10px;
}

.infor-user img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  vertical-align: middle;
}

.infor-user span {
  padding-left: 10px;
  font-weight: 800;
  font-size: var(--font-size);
}

.info-detail {
  margin: 10px;
  font-size: var(--font-size);
}

.info-detail p {
  color: rgba(19, 1, 1, 0.637);
}

.info-detail .info-other {
  display: flex;
  margin: 10px 0;
}

.info-detail .info-other .date {
  margin-right: 10px;
}

.info-imgs img {
  margin: 5px;
  width: 80px;
  height: 80px;
  float: left;
}

.info-imgs::after {
  content: " ";
  clear: both;
  display: block;
}
</style>