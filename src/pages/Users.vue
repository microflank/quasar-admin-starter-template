<template>
<q-page class="q-pa-lg">
    <p>Users</p>
    <q-pull-to-refresh @refresh="refresh">
     <q-table
      title="Users"
      :data="data"
      :columns="columns"
      row-key="id"
      :pagination.sync="pagination"
      :loading="loading"
      :filter="filter"
      :rows-per-page-options="[5, 10, 20, 50]"
      @request="onRequest"
      binary-state-sort
      table-class="no-shadow"
    >
      <template v-slot:top-right>
        <q-input outlined dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
      <!-- action -->
      <template v-slot:body-cell-actions="props">
        <q-td :props="props">
          <div class="col-auto">
            <q-btn color="text-white-7 text-grey-6" round flat icon="more_vert">
              <q-menu cover auto-close>
                <q-list>
                  <q-item clickable>
                    <q-item-section>View module</q-item-section>
                  </q-item>
                  <q-item clickable>
                    <q-item-section>Other action</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
            <q-btn flat round color="text-grey-7" @click.stop="removeItem(props.row)" icon="delete_outline" />
          </div>
        </q-td>
      </template>
      <!-- \end action -->
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
    </q-pull-to-refresh>
 
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
        descending: true,
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
        { name: 'actions', label: this.$t('actions'), field: 'actions', align:'right'},
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
    removeItem(row) {
      // alert(JSON.stringify(row))
      this.$q.notify({
        color: 'positive',
        position: 'center',
        message: `Deleting Item | ${row.name}${row.id}`,
        icon: 'delete'
      })
    },
    async refresh(done){
      await this.onRequest({ filter: this.filter, pagination : this.pagination})
      done()
    },
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
          this.data = response
          this.loading = false
        });

        this.pagination.page = page
        this.pagination.rowsPerPage = rowsPerPage
        this.pagination.sortBy = sortBy
        this.pagination.descending = descending

      } catch (error) {   
        // this.$q.notify({
        //   color: 'negative',
        //   position: 'top',
        //   message: `Loading failed:: + ${error.message}`,
        //   icon: 'report_problem'
        // })
      }
    }, 
   
  },
}
</script>
