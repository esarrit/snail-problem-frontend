<!-- 
  This view shows a grid of all escape attempts made by the snail. 
  The data is retrieved from the snailAttempts API endpoint. 
  The grid provides data binding, so it reflects any new attempts made 
  by the snail automatically. 
-->

<template>
  <ag-grid-vue
    style="
      height: 500px;
      width: 100%;
      margin-top: 30px;
      border: 2px solid hsla(160, 100%, 37%, 1);
      border-radius: 5px;
    "
    class="ag-theme-alpine-dark"
    @grid-ready="onGridReady"
    :columnDefs="columnDefs"
    :modules="modules"
  >
  </ag-grid-vue>
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
          valueFormatter: dateFormatter,
          maxWidth: 150,
          sortable: true,
        },
        { headerName: "Well Height", field: "H" },
        { headerName: "Day Progress", field: "U", sortable: true },
        { headerName: "Night Slide", field: "D" },
        { headerName: "Fatigue Factor", field: "F" },
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
