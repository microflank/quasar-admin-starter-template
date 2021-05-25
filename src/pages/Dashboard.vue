<template>
  <q-page class="q-pa-lg">
      <!-- Statistics ZONE -->
      <section class="row q-col-gutter-md">
        <div class="col-6 col-md-3">
          <q-card class="shadow-2 my-card bg-blue-gradient text-white">
            <q-card-section>
              <div class="row no-wrap">
                <div class="col">
                  <div class="text-h6 text-weight-bold">8,500</div>
                  <div class="text-subtitle2 q-mb-md">Artists</div>
                </div>
                <div class="col-auto">
                  <q-btn color="text-white-7" round flat icon="more_vert">
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
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-6 col-md-3">
          <q-card class="shadow-2 my-card bg-light-blue-gradient text-white">
            <q-card-section>
              <div class="row no-wrap">
                <div class="col">
                  <div class="text-h6 text-weight-bold">8,500</div>
                  <div class="text-subtitle2 q-mb-md">Artists</div>
                </div>
                <div class="col-auto">
                  <q-btn color="text-white-7" round flat icon="more_vert">
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
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-6 col-md-3">
          <q-card class="shadow-2 my-card bg-amber-gradient text-white">
            <q-card-section>
              <div class="row no-wrap">
                <div class="col">
                  <div class="text-h6 text-weight-bold">8,500</div>
                  <div class="text-subtitle2 q-mb-md">Playlist</div>
                </div>
                <div class="col-auto">
                  <q-btn color="text-white-7" round flat icon="more_vert">
                    <q-menu cover auto-close>
                      <q-list>
                        <q-item clickable>
                          <q-item-section>View module</q-item-section>
                        </q-item>
                      </q-list>
                    </q-menu>
                  </q-btn>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-6 col-md-3">
          <q-card class="shadow-2 my-card bg-red-gradient text-white">
            <q-card-section>
              <div class="row no-wrap">
                <div class="col">
                  <div class="text-h6 text-weight-bold">8,500</div>
                  <div class="text-subtitle2 q-mb-md">Tracks</div>
                </div>
                <div class="col-auto">
                  <q-btn color="text-white-7" round flat icon="more_vert">
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
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </section>
       <!-- Google Analytic ZONE -->
      <section class="row q-my-lg">
        <q-card class="my-card full-width shadow-2">
          <q-card-section class="q-pt-xs">
              <div class="text-h5">Traffic</div>
              <div class="text-overline text-grey q-mt-sm q-mb-xs">May 2021</div>
          </q-card-section>
          <q-card-section class="q-pt-xs">
              <AnalyticsChart style="height:300px;margin-top:40px;"/>
          </q-card-section>
          <q-separator />
          <div class="row justify-between q-px-xl q-py-md bg-grey-2">
            <section>
                <div class="text-subtitle2 text-center text-grey-8">Visits</div>
                <div class="text-subtitle1 text-weight-bold text-center text-grey-10">29.703 Users (40%)</div>
                <q-linear-progress :value="visitModel" color="positive"/>
            </section>
            <section>
                <div class="text-subtitle2 text-center text-grey-8">Unique</div>
                <div class="text-subtitle1 text-weight-bold text-center">29.703 Users (60%)</div>
                <q-linear-progress :value="visitModel2" color="primary"/>
            </section>
            <section>
                <div class="text-subtitle2 text-center text-grey-8">Pageviews</div>
                <div class="text-subtitle1 text-weight-bold text-center">29.703 Users (40%)</div>
                <q-linear-progress :value="visitModel" color="amber-9" />
            </section>
            <section>
                <div class="text-subtitle2 text-center text-grey-8">New Users</div>
                <div class="text-subtitle1 text-weight-bold text-center">29.703 Users (60%)</div>
                <q-linear-progress :value="visitModel2" color="negative"/>
            </section>
            <section>
                <div class="text-subtitle2 text-center text-grey-8">Bounce Rate</div>
                <div class="text-subtitle1 text-weight-bold text-center">29.703 Users (40%)</div>
                <q-linear-progress :value="visitModel" color="indigo-9"/>
            </section>
          </div>
        </q-card>
      </section>
      <!-- SOCIAL MEDIA ZONE -->
      <section class="row q-col-gutter-md">
        <div class="col-6 col-md-4">
          <q-card class="shadow-2 my-card text-white">
            <q-card-section class="bg-blue-10 text-center q-pa-lg">
              <q-icon :name="fabFacebook" size="xl" />
            </q-card-section>
            <div class="row bg-white justify-evenly q-py-md">
              <div class="text-center">
                <div class="text-weight-bold text-h5 text-grey-9">89K</div>
                <div class="text-weight-regular text-uppercase text-grey-7">friends</div>
              </div>
              <q-separator vertical  inset color="grey-10"/>
              <div class="text-center">
                <div class="text-weight-bold text-h5 text-grey-9">458</div>
                <div class="text-weight-regular text-uppercase text-grey-7">feeds</div>
              </div>
            </div>
          </q-card>
        </div>
        <div class="col-6 col-md-4">
          <q-card class="shadow-2 my-card text-white">
            <q-card-section class="bg-light-blue text-center q-pa-lg">
              <q-icon :name="fabTwitter" size="xl" />
            </q-card-section>
            <div class="row bg-white justify-evenly q-py-md">
              <div class="text-center">
                <div class="text-weight-bold text-h5 text-grey-9">894K</div>
                <div class="text-weight-regular text-uppercase text-grey-7">followers</div>
              </div>
              <q-separator vertical  inset color="grey-10"/>
              <div class="text-center">
                <div class="text-weight-bold text-h5 text-grey-9">1.792</div>
                <div class="text-weight-regular text-uppercase text-grey-7">tweets</div>
              </div>
            </div>
          </q-card>
        </div>
        <div class="col-6 col-md-4">
          <q-card class="shadow-2 my-card text-white">
            <q-card-section class="bg-blue-8 text-center q-pa-lg">
              <q-icon :name="fabLinkedin" size="xl" />
            </q-card-section>
            <div class="row bg-white justify-evenly q-py-md">
              <div class="text-center">
                <div class="text-weight-bold text-h5 text-grey-9">500K</div>
                <div class="text-weight-regular text-uppercase text-grey-7">Contact</div>
              </div>
              <q-separator vertical  inset color="grey-10"/>
              <div class="text-center">
                <div class="text-weight-bold text-h5 text-grey-9">292</div>
                <div class="text-weight-regular text-uppercase text-grey-7">feeds</div>
              </div>
            </div>
          </q-card>
        </div>
      </section>
  </q-page>
</template>

<script>
import { fabTwitter, fabFacebook, fabLinkedin } from '@quasar/extras/fontawesome-v5'
import Analytics from 'components/charts/Analytics'

export default {
  name: 'PageDashboard',
  components: {
    AnalyticsChart: Analytics
  },
  data () {
    return {
      visitModel: 0.4,
      visitModel2: 0.6,
    }
  },
  created () {
    this.fabTwitter = fabTwitter
    this.fabFacebook = fabFacebook
    this.fabLinkedin = fabLinkedin
  }

}
</script>
