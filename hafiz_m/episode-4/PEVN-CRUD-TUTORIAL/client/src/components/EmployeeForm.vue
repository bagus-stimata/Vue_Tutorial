<template>
    <v-container>
        <h1>Registration Form </h1>
        <v-row>
            <v-col cols="5">
                <v-text-field
                    label = "Employee Fullname"
                ></v-text-field>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols = "5">
                <v-select
                    :items = "genderList"
                    label = "Gender"
                >
                </v-select>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols ="5">
                <v-autocomplete
                    :items = "departementList"
                    label = "Departement"
                ></v-autocomplete>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols ="5">
                <v-textarea
                    outlined
                    label = "About Employee"
                ></v-textarea>
            </v-col>
        </v-row>

        <!-- Action Button -->
        <v-row>
            <v-spacer></v-spacer>
            <v-col cols="1">
                <v-btn
                    color="primary"
                >Save</v-btn>
            </v-col>

        </v-row>

    </v-container>
</template>

<script>
export default {
    data() {
        return {
            genderList: ["Male", "Female"],
            departementList: ["Enginering", "IT", "Humana Resource", "Produksi"]
        }
    }
}
</script>