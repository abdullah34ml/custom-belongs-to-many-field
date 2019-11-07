Nova.booting((Vue, router, store) => {
    Vue.component('index-CustomBelongsToManyField', require('./components/IndexField'))
    Vue.component('detail-CustomBelongsToManyField', require('./components/DetailField'))
    Vue.component('form-CustomBelongsToManyField', require('./components/FormField'))
})
