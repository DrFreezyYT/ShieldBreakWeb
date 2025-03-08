<template>
  <div class="content">
    <div class="content-grid">
      <template v-for="(section, sectionIndex) in teamSections" :key="sectionIndex">
        <div class="section-title">
          <h1>{{ section.title }}</h1>
        </div>
        <div class="members-grid">
          <template v-for="(member) in section.members" :key="member.name">
            <div class="grid-item">
              <div class="member-head">
                <PlayerHeadComponent :name="member.name" />
              </div>
              <div class="member-info">
                <h2>{{ member.displayName }}</h2>
                <h3 :style="getRoleStyle(member.role)">{{ member.role }}</h3>
              </div>
            </div>
          </template>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import PlayerHeadComponent from '@/components/team/player/PlayerHeadComponent.vue';

const teamSections = ref([
  {
    title: 'Owner & Admin',
    members: [
      {
        displayName: 'obvTiger',
        name: 'obvTiger',
        role: 'Admin'
      },
      {
        displayName: 'Dampflok2000x',
        name: 'Dampflok2000x',
        role: 'Owner'
      }
    ]
  },
  {
    title: 'Developers',
    members: [
      {
        displayName: 'DaGermanGuy',
        name: 'DaGermanGuy',
        role: 'Developer'
      },
      {
        displayName: 'MiniPandi',
        name: 'Mini_Pandi',
        role: 'Developer'
      }
    ]
  },
  {
    title: 'Moderators',
    members: [
      {
        displayName: 'Player',
        name: 'Player',
        role: 'Moderator'
      }
    ]
  },
  {
    title: 'Builders',
    members: [
      {
        displayName: 'Builder1',
        name: 'Builder1',
        role: 'Builder'
      }
    ]
  },
  {
    title: 'Media Team',
    members: [
      {
        displayName: 'Media1',
        name: 'Media1',
        role: 'Media'
      }
    ]
  }
]);

const roleColors = {
  'Owner': '#ff0000',
  'Admin': '#ff0000',
  'Developer': '#00ff00',
  'Moderator': '#0000ff',
  'Builder': '#ffa500',
  'Media': '#800080'
};

const getRoleStyle = (role) => {
  return {
    color: roleColors[role] || '#ffffff'
  };
};
</script>

<style scoped>
.content {
  flex: 1;
  display: flex;
  margin: 50px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-shadow: 2px 2px 4px #000000;
}

.content-grid {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  padding: 20px;
}

.section-title {
  text-align: center;
  margin-bottom: 20px;
}

.section-title h1 {
  font-size: 2rem;
  color: white;
  text-shadow: 2px 2px 4px #000000;
}

/* Updated grid container for team members:
   - Up to 4 items per row using grid-template-columns.
   - Items are centered if there are fewer than 4. */
.members-grid {
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: 20px;
  justify-content: center;
}

.grid-item {
  display: flex;
  align-items: center;
  background-color: #49494980;
  border: 3px solid #4b4b4b8C;
  border-radius: 32px;
  padding: 20px;
  filter: drop-shadow(10px 10px 11px #000000);
  gap: 20px;
}

.member-head {
  flex-shrink: 0;
}

.member-info {
  flex: 1;
}

@media (max-width: 768px) {
  .grid-item {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .member-info {
    margin: 0;
  }
}
</style>
