<template>
  <div>

    <p>
      <div v-for="answer in answers">
        <VueWriter :array="answer.content" :iterations='1' :typeSpeed="70"/>
      </div>
    </p>
    

    <div class="mb-3">
      <label for="thanksForBeingFired" class="form-label">ChatGWT (Chat Generative Without-trained Transformer)</label>
      <textarea
        class="form-control"
        id="thanksForBeingFired"
        rows="1"
        v-model="contentText"
      ></textarea>
    </div>
    <button
      type="button"
      class="btn btn-secondary"
      data-bs-toggle="popover"
      data-bs-placement="right"
      @click="processRequest()"
    >
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send-fill" viewBox="0 0 16 16">
      <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"/>
    </svg>
    </button>

  </div>
</template>

<script>

export default {
  methods: {
    processRequest() {
      this.answers.push({
        content: ["Ah véio pergunta pro chatGPT"]
      });
    },
  },
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  mounted() {
  },
  data() {
    return {
      contentText: this.msg,
      answers: []
    };
  },
};
</script>