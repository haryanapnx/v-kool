<template>
  <div id="app">
    <Loader v-if="isLoading" />
    <Card>
      <div class="row">
        <div class="col">
          <form @submit.prevent="handleSubmit">
            <FormInput
              required
              label="Nama"
              v-model="form.name"
              placeholder="Masukan Nama"
            />
            <FormInput
              required
              label="NIK"
              v-model.number="form.nik"
              placeholder="Masukan NIK"
              min="0"
              type="number"
            />
            <FormInput
              required
              label="Nomor Kartu Keluarga"
              placeholder="Masukan Nomor Kartu Keluarga"
              v-model.number="form.kkNumber"
              min="0"
              type="number"
            />
            <FormInput
              required
              label="Foto KTP"
              type="file"
              accept="image/x-png,image/bmp,image/jpeg,image/jpg"
              name="photoKtp"
              @input="previewFiles"
              placeholder="Masukan Foto KTP"
              note="*Ukuran File Maksimal 2MB"
              multiple
            />
            <FormInput
              required
              type="file"
              accept="image/x-png,image/bmp,image/jpeg,image/jpg"
              name="photoKK"
              @input="previewFiles"
              multiple
              label="Foto Kartu Keluarga"
              placeholder="Masukan Foto Kartu Keluarga"
              note="*Ukuran File Maksimal 2MB"
            />
            <div class="row">
              <div class="col sm-5 md-5 lg-5">
                <FormInput
                  required
                  label="Umur"
                  :value="form.age"
                  placeholder="Masukan Umur"
                  :min="1"
                  :max="25"
                  type="number"
                  note="*Umur maksimal 25 tahun"
                  @input="handleInput"
                />
              </div>
              <div class="col sm-5 md-5 lg-5">
                <SelectOption
                  :options="genderOptions"
                  @change="handleSelect"
                  label="Jenis Kelamin"
                  name="gender"
                  required
                />
              </div>
            </div>

            <FormTextarea
              required
              label="Alamat"
              v-model="form.address"
              placeholder="Masukan Alamat"
              :maxlength="255"
            />

            <div class="row">
              <div class="col sm-5 md-5 lg-5">
                <FormInput
                  required
                  label="RT"
                  min="0"
                  type="number"
                  v-model="form.rt"
                  placeholder="Masukan RT"
                />
              </div>
              <div class="col sm-5 md-5 lg-5">
                <FormInput
                  required
                  label="RW"
                  min="0"
                  type="number"
                  v-model="form.rw"
                  placeholder="Masukan RW"
                />
              </div>
            </div>

            <div class="row">
              <div class="col sm-5 md-5 lg-5">
                <FormInput
                  required
                  label="Penghasilan sebelum pandemi"
                  v-model="form.incomeBefore"
                  type="number"
                  :min="0"
                />
              </div>
              <div class="col sm-5 md-5 lg-5">
                <FormInput
                  required
                  label="Penghasilan setelah pandemi"
                  :value="form.incomeAfter"
                  type="number"
                  :min="0"
                />
              </div>
            </div>

            <SelectOption
              @change="handleSelect"
              :options="reasonOptions"
              label="Alasan membutuhkan bantuan"
              name="reason"
              required
            />
            <FormInput
              v-if="isOther"
              required
              v-model="form.reason"
              placeholder="Lainnya"
            />

            <Checkbox
              :options="[
                'Saya menyatakan bahwa data yang diisikan adalah benar dan siap mempertanggungjawabkan apabila ditemukan ketidaksesuaian dalam data tersebut.'
              ]"
              @input="handleCheck"
            />

            <Button
              :disabled="isCheck.length === 0"
              type="submit"
              block
              variant="secondary"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </Card>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {
  FormInput,
  Card,
  SelectOption,
  Button,
  FormTextarea,
  Loader,
  Checkbox
} from "../components";
import { DataTypes } from "./interface";
import { fakeHttp } from "../services/http-commons";
import { convertToCurrency } from "../utils";

export default Vue.extend({
  name: "Home",
  components: {
    FormInput,
    Card,
    SelectOption,
    Button,
    FormTextarea,
    Loader,
    Checkbox
  },

  data(): DataTypes {
    return {
      form: {
        name: "",
        nik: 0,
        kkNumber: 0,
        photoKtp: null,
        photoKK: null,
        age: 0,
        gender: "",
        address: "",
        rt: "",
        rw: "",
        incomeBefore: "",
        incomeAfter: "",
        reason: ""
      },
      isLoading: false,
      isOther: false,
      isCheck: []
    };
  },

  computed: {
    reasonOptions() {
      const options: string[] = [
        "Kehilangan pekerjaan",
        "Kepala keluarga terdampak atau korban Covid",
        "Tergolong fakir/miskin semenjak sebelum Covid",
        "Lainnya"
      ];
      const defaultValue = { value: "", label: "Pilihan alasan" };
      const newOption = options.map(item => ({ value: item, label: item }));
      return [defaultValue, ...newOption];
    },

    genderOptions() {
      const genders = ["Laki-laki", "Perempuan"];
      return genders.map(item => ({
        value: item.toLowerCase(),
        label: item
      }));
    }
  },

  methods: {
    async handleSubmit() {
      this.isLoading = true;
      try {
        await fakeHttp({
          url: "/register-bansos",
          params: null,
          body: this.form
        });
      } catch (error) {
        console.error({ error });
      }
      this.isLoading = false;
    },

    handlePrice(value: string, e: any) {
      const { name } = e.target;
      this.form[name] = value;
      const convert = convertToCurrency(this.form[name]);
      e.target.value = convert;
    },

    handleSelect(e: any) {
      const { name, value } = e.target;
      if (value === "Lainnya") {
        this.isOther = true;
        this.form[name] = "";
        return;
      }
      this.form[name] = value;
      this.isOther = false;
    },

    handleCheck(value: string[]) {
      this.isCheck = value;
    },

    previewFiles(_: string, e: any) {
      const { files, name } = e.target;
      const file = files[0];
      if (file.size > 2_097_152) {
        alert("Ukuran File Maksimal 2MB");
        return;
      }
      this.form[name] = file;
    },

    handleInput(value: any, e: any) {
      if (Number(value) <= 25) {
        this.form.age = Number(value);
      }
      e.target.value = this.form.age;
    }
  }
});
</script>
