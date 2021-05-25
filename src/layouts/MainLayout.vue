<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-1">
    <q-header elevated class="bg-white text-grey-8 q-py-xs" height-hint="58">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
        />

        <q-btn flat no-caps no-wrap class="q-ml-xs" v-if="$q.screen.gt.xs">
          <q-icon :name="fabYoutube" color="red" size="28px" />
          <q-toolbar-title shrink class="text-weight-bold">
            JokeStudio
          </q-toolbar-title>
        </q-btn>

        <q-space />

        <div class="YL__toolbar-input-container row no-wrap">
          <q-input dense outlined square v-model="search" placeholder="Search" class="bg-white col" />
          <q-btn class="YL__toolbar-input-btn" color="grey-3" text-color="grey-8" icon="search" unelevated />
        </div>

        <q-space />

        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn round dense flat color="grey-8" icon="audiotrack" v-if="$q.screen.gt.sm">
            <q-tooltip>Create an audio or post</q-tooltip>
          </q-btn>
          <q-btn round dense flat color="grey-8" icon="message" v-if="$q.screen.gt.sm">
            <q-tooltip>Messages</q-tooltip>
          </q-btn>
          <q-btn round dense flat color="grey-8" icon="notifications">
            <q-badge color="red" text-color="white" floating>
              2
            </q-badge>
            <q-tooltip>Notifications</q-tooltip>
          </q-btn>
          <q-btn round flat>
            <q-avatar size="26px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <q-tooltip>Account</q-tooltip>
            <q-menu>
              <q-list style="min-width: 100px">
                <q-item clickable v-close-popup>
                  <q-item-section>Settings</q-item-section>
                </q-item>
                <q-item clickable v-close-popup>
                  <q-item-section>Sign Out</q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable v-close-popup>
                  <q-item-section>Help &amp; Feedback</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"
      :width="240"
    >
      <q-scroll-area class="fit">
        <q-list padding>
          <QuickLinks :links="sidebarLinkA" />
          <q-separator class="q-my-md" />
          <QuickLinks :links="modules" />
          <q-separator class="q-mt-md q-mb-xs" />
          <q-item-label header class="text-weight-bold text-uppercase">
            More from JokeStudio
          </q-item-label>
          <QuickLinks :links="links3" />
          <q-separator class="q-my-md" />
          <QuickLinks :links="links4" />

          <q-separator class="q-mt-md q-mb-lg" />

          <div class="q-px-md text-grey-9">
            <div class="row items-center q-gutter-x-sm q-gutter-y-xs">
              <a
                v-for="button in buttons1"
                :key="button.text"
                class="YL__drawer-footer-link"
                href="javascript:void(0)"
              >
                {{ button.text }}
              </a>
            </div>
          </div>
          <div class="q-py-md q-px-md text-grey-9">
            <div class="row items-center q-gutter-x-sm q-gutter-y-xs">
              <a
                v-for="button in buttons2"
                :key="button.text"
                class="YL__drawer-footer-link"
                href="javascript:void(0)"
              >
                {{ button.text }}
              </a>
            </div>
          </div>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <keep-alive>
        <router-view />
      </keep-alive>
    </q-page-container>
  </q-layout>
</template>

<script>
import { fabYoutube } from '@quasar/extras/fontawesome-v5'
import QuickLinks from 'components/QuickLinks'
export default {
  name: 'MyLayout',
  components: {
    QuickLinks
  },
  data () {
    return {
      leftDrawerOpen: false,
      search: '',
      sidebarLinkA: [
        { icon: 'home', title: 'Dashboard', link:'/dashboard'},
        { icon: 'whatshot', title: 'Trending', link:'/dashboard1'},
        { icon: 'subscriptions', title: 'Subscriptions'},
      ],
      modules: [
        { icon: 'groups', title: 'Artists', link:'/artists' },
        { icon: 'audiotrack', title: 'Tracks', link:'/tracks' },
        { icon: 'manage_accounts', title: 'Users', link:'/users' }
      ],
      links2: [
        { icon: 'folder', title: 'Library' },
        { icon: 'restore', title: 'History' },
        { icon: 'watch_later', title: 'Watch later' },
        { icon: 'thumb_up_alt', title: 'Liked videos' }
      ],
      links3: [
        { icon: fabYoutube, title: 'YouTube Premium' },
        { icon: 'local_movies', title: 'Movies & Shows' },
        { icon: 'videogame_asset', title: 'Gaming' },
        { icon: 'live_tv', title: 'Live' }
      ],
      links4: [
        { icon: 'settings', title: 'Settings' },
        { icon: 'flag', title: 'Report history' },
        { icon: 'help', title: 'Help' },
        { icon: 'feedback', title: 'Send feedback' }
      ],
      buttons1: [
        { text: 'About' },
        { text: 'Press' },
        { text: 'Copyright' },
        { text: 'Contact us' },
        { text: 'Creators' },
        { text: 'Advertise' },
        { text: 'Developers' }
      ],
      buttons2: [
        { text: 'Terms' },
        { text: 'Privacy' },
        { text: 'Policy & Safety' },
        { text: 'Test new features' }
      ]
    }
  },

  created () {
    this.fabYoutube = fabYoutube
  }
}
</script>

<style lang="sass">
.YL

  &__toolbar-input-container
    min-width: 100px
    width: 55%

  &__toolbar-input-btn
    border-radius: 0
    border-style: solid
    border-width: 1px 1px 1px 0
    border-color: rgba(0,0,0,.24)
    max-width: 60px
    width: 100%

  &__drawer-footer-link
    color: inherit
    text-decoration: none
    font-weight: 500
    font-size: .75rem

    &:hover
      color: #000
</style>
