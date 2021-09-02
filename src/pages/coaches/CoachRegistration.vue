<template>
  <section>
    <base-card>
      <h2>Register as coach now!</h2>
      <coach-form @save-data='saveData'></coach-form>
    </base-card>
  </section>
</template>

<script>
import coachForm from '../../components/coaches/CoachForm.vue';
export default {
  components: {coachForm},
  computed: {
    isCoach() {
      return this.$store.getters['coaches/isCoach'];
    }
  },
  methods: {
    saveData(data) {
      this.$store.dispatch('coaches/registerCoach', data);
      this.$router.replace('/coaches');
    }
  }
}
</script>