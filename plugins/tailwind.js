// import Vue from "vue";
// import VueTailwind from "vue-tailwind";

// // import VueTailwind from 'vue-tailwind/dist/full'

// import {
//     TInput,
//     TTextarea,
//     TSelect,
//     TRadio,
//     TCheckbox,
//     TButton,
//     TInputGroup,
//     TCard,
//     TAlert,
//     TModal,
//     TDropdown,
//     TRichSelect,
//     TPagination,
//     TTag,
//     TRadioGroup,
//     TCheckboxGroup,
//     TTable,
//     TDatepicker,
//     TToggle,
//     TDialog,
//   } from 'vue-tailwind/dist/components';

// Vue.use(VueTailwind);

import Vue from 'vue'
// Notice that I am using a different path here:
import VueTailwind from 'vue-tailwind/dist/full'

const settings = {
  TInput: {
    classes: 'border-2 block w-full rounded text-gray-800',
    // ...More settings
  },
  TButton: {
    classes: 'rounded-lg border block inline-flex items-center justify-center',
    // ...More settings
  },
  // ...Rest of the components
}

Vue.use(VueTailwind, settings)
