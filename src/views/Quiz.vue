<template>
  <div id="component-root" class="bg-hero_color min-h-screen">
    <div v-if="((current+1) !== len + 1)">
      <div class="quiz-infos flex justify-around mt-20
      text-text text-2xl font-extrabold">
        <h1>QUIZ</h1>
        <span>{{(current + 1)}}/{{len}}</span>
      </div>
      <div class="quiz-container flex justify-center items-center min-h-screen">
        <div class="quiz-qst">
          <h1 class="text-2xl text-text font-bold ">{{quiz[current].question}}</h1>
          <div class="flex justify-between">
            <div v-for="(a, key) in quiz[current].answers" v-bind:key="key" class="mt-10">
              <button class="quiz-btn bg-background_clear text-text rounded-10 p-5
              hover:bg-primary hover:text-white"
              @click="addAnswer(a.id, current)">{{a.text}}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      Please wait...
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios, { AxiosResponse } from 'axios';

export default defineComponent({
  name: 'Quiz',
  title: 'Aphrodite - Quiz',
  data() {
    return {
      quiz: null,
      len: 0,
      current: 0,
      data: [] as Array<Array<number>>,
    };
  },
  mounted() {
    this.getQuestions();
  },
  methods: {
    getQuestions() {
      axios.get(`${this.$store.state.BaseUrl}/api/quiz`).then((res: AxiosResponse) => {
        this.quiz = res.data;
        this.len = res.data.length;
      });
    },
    progress() {
      return ((this.current + 1) / this.len) * 100;
    },
    validateAnswers() {
      axios.post(`${this.$store.state.BaseUrl}/api/quiz`, {
        data: this.data,
      }).then((response: AxiosResponse) => {
        this.$router.push(`/results/${response.data}`);
      });
    },
    addAnswer(answerId: number, questionId:number) {
      this.current += 1;
      const d: Array<number> = [];
      d.push(questionId);
      d.push(answerId);
      this.data.push(d);
      if (this.current === this.len) {
        this.validateAnswers();
      }
    },
  },
});
</script>

<style>

</style>
