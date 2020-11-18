export default {
  methods: {
    onCancle(formName) {
      this.$refs[formName].resetFields()
    },
    onNext() {
      console.log('onNext: ')
    }
  }
}
