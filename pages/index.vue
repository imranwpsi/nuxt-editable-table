<template>
  <div class="container">

    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="flex flex-col" style="width: 100%">
      <div class="-my-2 overflow-x-auto sm:-mx-12 lg:-mx-12">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Phone
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="(item, index) in users" :key="index">
                  <td class="px-6 py-4 whitespace-nowrap"><editable-component :data="item.name" :index="index" /></td>
                  <td class="px-6 py-4 whitespace-nowrap"><editable-component :data="item.email" :index="index" /></td>
                  <td class="px-6 py-4 whitespace-nowrap"><editable-component :data="item.phone" :index="index" /></td>
                  <td class="px-6 py-4 whitespace-nowrap"><editable-component :data="item.status" :index="index" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import {mapGetters, mapState, mapActions} from 'vuex'
import EditableComponent from '@/components/EditableComponent';
export default {
  name: 'Table',

  comments: {
    EditableComponent
  },
  data() {
    return {
      mountains: [],
    }
  },
  methods: {
    ...mapActions({
      getUser: 'user/allUser'
    })
  },
  computed: {
    ...mapGetters({
      users: 'user/getUser'
    }),
  },

  mounted() {
    this.getUser();
  }

}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
