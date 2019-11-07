<template>
  <panel-item :field="field">
    <div slot="value">
      <span v-for="(resource, index) in field.value"
      :key="index"
      >
        <a
          :href="$router.options.base + '/resources/' + field.resourceNameRelationship +'/' + resource.id"
          class="no-underline dim text-primary font-bold"
        >
          {{showResource(resource)}}<span v-if="index < (field.value.length - 1)">,</span>
        </a>
      </span>
    </div>
  </panel-item>
</template>

<script>
export default {
  props: ["resource", "resourceName", "resourceId", "field"],
  methods: {
    showResource(resource){
      let result = "";
      for(let i=0;i<this.field.optionsShow.length;i++){
        if(i==(this.field.optionsShow.length-1)){
          result = result + resource[this.field.optionsShow[i]];
        }else{
          result = result + resource[this.field.optionsShow[i]] + " ";
        }
      }
      return result;
    }
  }
};
</script>
