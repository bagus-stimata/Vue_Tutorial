<template>
    <div class="projects">
        <h1 class="subtitle-1 grey--text">Projects</h1>
        
        <!-- <v-container class="my-5">

            <v-expansion-panels>
                <v-expansion-panel
                v-for="(item,i) in 5"
                :key="i"
                >
                <v-expansion-panel-header>
                    Item {{item}} on index {{i}}
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-container> -->

        <!-- <v-container class="my-5">
        <v-expansion-panels>
            <v-expansion-panel-content v-for="project in myProjects" :key="project.title">
            <div slot="header" class="py-1">{{ project.title }}</div>
            <v-card>
                <v-card-text class="px-4 grey--text">
                <div class="font-weight-bold">Due by {{ project.due }}</div>
                <div>{{ project.content }}</div>
                </v-card-text>
            </v-card>
            </v-expansion-panel-content>
        </v-expansion-panels>
        </v-container> -->


        <v-container class="my-5">

            <v-expansion-panels>
                <v-expansion-panel
                v-for="project in projects"
                :key="project.title"
                >
                <v-expansion-panel-header>
                    Item {{project.title}} 
                </v-expansion-panel-header>
                <v-expansion-panel-content class="px-4 grey--text">
                    <div class="font-weight-bold">Due by {{ project.due }}</div>
                    <div>{{project.content}}</div>                    
                </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-container>

        <v-container class="my-5">

            <v-expansion-panels>
                <v-expansion-panel
                v-for="project in myProjects"
                :key="project.title"
                >
                <v-expansion-panel-header>
                    Item {{project.title}} 
                </v-expansion-panel-header>

                <v-expansion-panel-content class="px-4 grey--text">                    
                    <v-card flat>
                        <v-card-text class="px-4 grey--text">
                            <div class="font-weight-bold">Due by {{ project.due }}</div>
                            <div>{{ project.content }}</div>
                        </v-card-text>
                    </v-card>                    
                </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-container>

    
    </div>

</template>

<script>
    export default {
        data() {
            return {
            projects: [
                { title: 'Design a new website', person: 'The Net Ninja', due: '1st Jan 2019', status: 'ongoing', content: 'A. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
                { title: 'Code up the homepage', person: 'Chun Li', due: '10th Jan 2019', status: 'complete', content: 'B. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
                { title: 'Design video thumbnails', person: 'Ryu', due: '20th Dec 2018', status: 'complete', content: 'C. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
                { title: 'Create a community forum', person: 'Gouken', due: '20th Oct 2018', status: 'overdue', content: 'D. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
            ]
            }
        },
        computed: {
            myProjects() {
            return this.projects.filter(project => {
                return project.person === 'The Net Ninja' && project.status != 'complete'
            })
            }
        }
    }
</script>
