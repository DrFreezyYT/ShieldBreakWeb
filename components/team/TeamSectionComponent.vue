<template>
  <div class="content">
    <div class="content-grid">
      <template v-for="(section, sectionIndex) in teamSections" :key="sectionIndex">
        <div class="section-title">
          <h1>{{ section.title }}</h1>
        </div>
        <div class="members-grid">
          <template v-for="(member) in section.members" :key="member.uuid">
            <div class="grid-item">
              <div class="member-head">
                <PlayerHeadComponent :uuid="member.uuid" />
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
        uuid: '9cf53e3a-482e-4495-8e4c-9e26d6397536',
        displayName: 'DL2x',
        role: 'Owner'
      },
      {
        uuid: 'c52ab60e-7899-4a70-8f6d-11774fc0a09a',
        displayName: 'young gutz',
        role: 'Admin'
      }
    ]
  },
  {
    title: 'Developer',
    members: [
      {
        uuid: 'b233eb4f-3c0d-4ea1-b412-e491a4818553',
        displayName: 'obvTiger',
        role: 'Developer'
      },
      {
        uuid: '04cb4567-f37b-43cf-89b9-fbc048c6f088',
        displayName: 'MiniPandi',
        role: 'Developer'
      },
      {
        uuid: '02f7c2ce-41fe-4069-aac0-7bb7bcde91dd',
        displayName: 'DaTTV',
        role: 'Developer'
      },
      {
        uuid: '632d0cdd-b2ad-4555-9d1e-dd10bbc249d3',
        displayName: 'Minemaster',
        role: 'Developer'
      }
    ]
  },
  {
    title: 'Moderator',
    members: [
      {
        uuid: '08797141-975b-488e-83de-1ff4d7ccc940',
        displayName: 'Flexi',
        role: 'Moderator'
      },
      {
        uuid: '1b0482e4-b806-4e80-95fa-f78b6003479b',
        displayName: 'Wuschel',
        role: 'Moderator'
      }
    ]
  },
  {
    title: 'Builder',
    members: [
      {
        uuid: '1420a0a8-91ce-4f88-9f8d-0ae2a4a20898',
        displayName: 'Tom',
        role: 'Builder'
      },
      {
        uuid: 'daf0c981-cf05-4dc1-b97c-a3beaa253175',
        displayName: 'Tyren',
        role: 'Builder'
      }
    ]
  }
]);

const roleColors = {
  'Owner': '#aa0000',
  'Admin': '#ff5555',
  'Developer': '#55ffff',
  'Moderator': '#ffff55',
  'Builder': '#00aa00',
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
  margin: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
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
  font-size: 2rem;
  color: white;
}

.section-title h1 {
  font-size: 2rem;
  color: white;
}

.members-grid {
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: 20px;
  justify-content: center;
}

.member-head {
  flex-shrink: 0;  
}


.grid-item {
  display: flex;
  flex-direction: row; /* This will move the head to the right */
  align-items: center;
  background-color: #49494980;
  border: 3px solid #4b4b4b8C;
  border-radius: 12px;
  padding: 20px;
  gap: 20px;
}

.member-info {
  flex: 1;
  text-align: right; /* This will align text to the right */
}

@media (max-width: 768px) {
  .grid-item {
    flex-direction: column; /* Keep the mobile layout as is */
    align-items: center;
  }

  .member-info {
    text-align: center; /* Center text on mobile */
    margin: 0;
  }
}
</style>
