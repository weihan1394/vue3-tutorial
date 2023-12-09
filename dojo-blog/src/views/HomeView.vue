<template>
  <div class="home">
    home
    <p ref="p">
      My name is {{ ninjaOne.name }} and my age is {{ ninjaOne.age }}
    </p>
    <button @click="handleClickTwo">click me</button>
    <button @click="ninjaOne.age++">add 1 to age</button>
    <button @click="updateNinjaOne">Update ninja one</button>
    <input type="text" v-model="name" />
    <h2>Reactive</h2>
    <p>{{ ninjaTwo.name }} - {{ ninjaTwo.age }}</p>
    <button @click="updateNinjaTwo">Update ninja two</button>
    <input type="text" v-model="search" />
    <p>search term - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">{{ name }}</div>
    <button @click="handleClickStop">Stop Watching</button>
  </div>
</template>

<script>
import { computed, ref, watch, reactive, watchEffect } from 'vue';

export default {
  name: 'HomeView',
  setup() {
    // not reactive value
    // always run first
    const ninjaOne = ref({ name: 'mario', age: 30 });
    const ninjaTwo = reactive({ name: 'luigi', age: 35 });

    // ref
    const handleClick = () => {
      ninjaOne.value.name = 'luigi';
      ninjaOne.value.age = 35;
    };

    // reactive - do not need to use value
    const handleClickTwo = () => {
      ninjaTwo.name = 'wei han';
      ninjaTwo.age = 45;
    };

    const updateNinjaOne = () => {
      ninjaOne.value.age = 40;
    };

    const updateNinjaTwo = () => {
      ninjaTwo.age = 40;
      nameTwo = reactive('mario');
    };

    const names = ref([
      'mario',
      'yoshi',
      'luigi',
      'toad',
      'toad1',
      'bowser',
      'koopa',
      'peach',
    ]);

    const search = ref('');

    const stopWatch = watch(search, () => {
      console.log('watch function ran');
    });

    const stopEffect = watchEffect(() => {
      console.log('watchEffect function ran', search.value);
    });

    const matchingNames = computed(() => {
      return names.value.filter((name) => {
        return name.includes(search.value);
      });
    });

    const handleClickStop = () => {
      stopWatch();
      stopEffect();
    };

    return {
      ninjaOne,
      ninjaTwo,
      handleClick,
      handleClickTwo,
      updateNinjaOne,
      updateNinjaTwo,
      names,
      search,
      matchingNames,
    };
  },
  created() {
    console.log('created');
  },
  mounted() {
    console.log('mounted');
  },
};
</script>
