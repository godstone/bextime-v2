<template>
    
    <v-card>
        <v-container>
        <v-form v-model="valid">
        <v-row>
            <v-col
            cols="12"
            >
            <v-text-field
                v-model="kundenProjekt"
                label="Kunde / Projekt auswählen"
                required
            ></v-text-field>
            </v-col>

            <v-col
            cols="12"
            >
            <v-text-field
                v-model="leistung"
                label="Leistung auswählen"
                required
            ></v-text-field>
            <v-switch
                v-model="cashSwitch"
                :label="'$'"
            ></v-switch>
            </v-col>

            <v-col
            cols="12"
            >
            <v-textarea
                name="beschreibung"
                label="Beschreibung"
                value=""
                :counter="40"
                ></v-textarea>
            </v-col>
        </v-row>
        </v-form>
    </v-container>
  </v-card>
</template>

<script>
export default {
    name: 'TimeRecordBox',
    props: {
        cashSwitch: Boolean,
    },
}
</script>