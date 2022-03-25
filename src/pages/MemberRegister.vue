<script>
import AppLayout from "@/components/AppLayout.vue";

export default {
  name: "MemberRegister",
  components: {
    AppLayout,
  },
};
</script>

<template>
  <AppLayout>
    <h2 class="text-center">ประวัติ</h2>
    <div class="grid">
      <div class="md:col-4 md:col-offset-4 col-10 col-offset-1 p-0">
        <div class="field">
          <label for="firstname1">Firstname</label>
          <input id="firstname1" type="text" class="inputfield w-full" />
        </div>
        <div class="field">
          <label for="lastname1">Lastname</label>
          <input id="lastname1" type="text" class="inputfield w-full" />
        </div>
        <div class="field">
          <label for="lastname1">Email</label>
          <input id="lastname1" type="text" class="inputfield w-full" />
        </div>
        <div class="field">
          <label for="lastname1">Date Of Birth</label>
          <input id="lastname1" type="text" class="inputfield w-full" />
        </div>
        <div class="grid">
          <div class="col-6">
            <div class="field">
              <label for="lastname1">Age</label>
              <input id="lastname1" type="text" class="inputfield w-full" />
            </div>
          </div>
          <div class="col-6">
            <div class="field">
              <label for="lastname1">Sex</label>
              <input id="lastname1" type="text" class="inputfield w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </AppLayout>
</template>

