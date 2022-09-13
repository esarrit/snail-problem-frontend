<template>
  <div class="gridContainer">
    <ag-grid-vue
      style="height: 500px"
      class="ag-theme-alpine-dark"
      @grid-ready="onGridReady"
      :columnDefs="columnDefs"
      :modules="modules"
    >
    </ag-grid-vue>
  </div>
</template>
<script>
import moment from "moment";
import { AgGridVue } from "@ag-grid-community/vue3";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import "@ag-grid-community/core/dist/styles/ag-grid.css";
import "@ag-grid-community/core/dist/styles/ag-theme-alpine-dark.css";

export default {
  components: {
    AgGridVue,
  },
  data() {
    return {
      columnDefs: [
        {
          headerName: "Date",
          field: "DATE",
          sortable: true,
          valueFormatter: dateFormatter,
          maxWidth: 150,
        },
        { headerName: "Well Height", field: "H", type: "numericColumn" },
        {
          headerName: "Day Progress",
          field: "U",
          sortable: true,
          filter: true,
          type: "numericColumn",
        },
        { headerName: "Night Slide", field: "D", type: "numericColumn" },
        { headerName: "Fatigue Factor", field: "F", type: "numericColumn" },
        { headerName: "Result", field: "result", filter: true },
      ],
      modules: [ClientSideRowModelModule],
    };
  },
  mounted() {
    console.log(AgGridVue);
  },
  methods: {
    onGridReady(params) {
      const httpRequest = new XMLHttpRequest();
      const updateData = (data) => {
        params.api.setRowData(data.slice(0, 50));
      };

      httpRequest.open(
        "GET",
        "https://snail-project.herokuapp.com/api/snailAttempts"
      );
      httpRequest.send();
      httpRequest.onreadystatechange = () => {
        if (httpRequest.readyState === 4 && httpRequest.status === 200) {
          updateData(JSON.parse(httpRequest.responseText));
        }
      };
    },
  },
};

window.dateFormatter = function dateFormatter(params) {
  return moment(params.value).format("MM/DD/YYYY");
};
</script>

<style>
.gridContainer {
  display: block;
  margin-top: 30px;
  border: 2px solid hsla(160, 100%, 37%, 1);
  border-radius: 5px;
}
</style>
