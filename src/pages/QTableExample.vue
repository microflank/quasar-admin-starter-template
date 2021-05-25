<template>
<q-page class="q-pa-lg">
    <p>Artists</p>
     <q-table
      title="Artists"
      :data="data"
      :columns="columns"
      row-key="id"
      :pagination.sync="pagination"
      :loading="loading"
      :filter="filter"
      :rows-per-page-options="[5, 8]"
      @request="onRequest"
      binary-state-sort
    >
      <template v-slot:top-right>
        <q-input outlined dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
      <template v-slot:no-data="{ icon, message, filter }">
        <div class="full-width row flex-center text-accent q-gutter-sm">
          <q-icon size="2em" name="sentiment_dissatisfied" />
          <span>
            Well this is sad... {{ message }}
          </span>
          <q-icon size="2em" :name="filter ? 'filter_b_and_w' : icon" />
        </div>
      </template>

    </q-table>
 
  </q-page>
</template>

<script>

import { api } from 'boot/axios'

export default {
  data () {
    return {
      filter: '',
      loading: false,
      pagination: {
        sortBy: 'desc',
        descending: false,
        page: 1,
        rowsPerPage: 5,
        rowsNumber: 1000
      },
      columns: [
        { name: 'id', label: '#', field: 'id',align: 'left', sortable: true },
        { name: 'name', label: 'Name', field: 'name', align: 'left', sortable: true },
        { name: 'country', label: 'Country', field: 'country', align: 'left', sortable: true},
        { name: 'city', label: 'City', field: 'city', align: 'left', sortable: true },
        { name: 'state', label: 'State', field: 'state',align: 'left',  sortable: true, sort: true},
        { name: 'postal_code', label: 'Postal code', field: 'postal_code',align: 'left',  sortable: true, sort: true},
      ],
      data: []
    }
  },
  mounted () {
    // get initial data from server (1st page)
    this.onRequest({
      pagination: this.pagination,
      filter: undefined
    })
  },
  methods: {
    // async onRequest (props) {
    //   const { page, rowsPerPage, sortBy, descending } = props.pagination
    //   const filter = props.filter
    //   let _descending = descending? '-' : '+';

    //   let parameters = `page=${page}&per_page=${rowsPerPage}&sort=${_descending}${sortBy}`
    //   let base_url = 'https://api.openbrewerydb.org/breweries'

    //   let listing_url = filter ? 
    //               `${base_url}/search?query=${filter}&${parameters}` : 
    //               `${base_url}?${parameters}`
      
    //   this.loading = true
    //   try {
    //     let data = await fetch(`${listing_url}`);
    //     console.log(data)
    //     this.data = await data.json(); 

    //     this.pagination.page = page
    //     this.pagination.rowsPerPage = rowsPerPage
    //     this.pagination.sortBy = sortBy
    //     this.pagination.descending = descending

    //     this.loading = false
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },
    async onRequest (props) {
      const { page, rowsPerPage, sortBy, descending } = props.pagination
      const filter = props.filter
      let _descending = descending? '-' : '+';

      let parameters = `page=${page}&per_page=${rowsPerPage}&sort=${_descending}${sortBy}`

      let listing_url = filter ? 
                  `/search?query=${filter}&${parameters}` : 
                  `?${parameters}`
      
      this.loading = true

      try {
        await api.get(listing_url)
        .then((response) => {
          this.data = response.data
          this.loading = false
        });

        this.pagination.page = page
        this.pagination.rowsPerPage = rowsPerPage
        this.pagination.sortBy = sortBy
        this.pagination.descending = descending

      } catch (error) {   
        this.$q.notify({
          color: 'negative',
          position: 'top',
          message: `Loading failed:: + ${error.message}`,
          icon: 'report_problem'
        })
      }
    }, 
   
  },
}
</script>
