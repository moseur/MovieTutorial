﻿
namespace MovieTutorial.MovieDB {

    @Serenity.Decorators.registerClass()
    export class PersonDialog extends Serenity.EntityDialog<PersonRow, any> {
        protected getFormKey() { return PersonForm.formKey; }
        protected getIdProperty() { return PersonRow.idProperty; }
        protected getLocalTextPrefix() { return PersonRow.localTextPrefix; }
        protected getNameProperty() { return PersonRow.nameProperty; }
        protected getService() { return PersonService.baseUrl; }
        protected getDeletePermission() { return PersonRow.deletePermission; }
        protected getInsertPermission() { return PersonRow.insertPermission; }
        protected getUpdatePermission() { return PersonRow.updatePermission; }

        protected getTemplate() {
            return `<div id="~_Tabs" class="s-DialogContent">
                <ul>
                    <li><a href="#~_TabInfo"><span>Person</span></a></li>
                    <li><a href="#~_TabMovies"><span>Movies</span></a></li>
                </ul>
                <div id="~_TabInfo" class="tab-pane s-TabInfo">
                    <div id="~_Toolbar" class="s-DialogToolbar">
                    </div>
                    <div class="s-Form">
                        <form id="~_Form" action="">
                            <div class="fieldset">
                                <div id="~_PropertyGrid"></div>
                                <div class="clear"></div>
                            </div>
                        </form>
                    </div>
                </div>
                <div id="~_TabMovies" class="tab-pane s-TabMovies">
                    <div id="~_MoviesGrid">

                    </div>
                </div>
            </div>`;
        }

        protected form = new PersonForm(this.idPrefix);

        private moviesGrid: PersonMovieGrid;

        constructor() {
            super();

            this.moviesGrid = new PersonMovieGrid(this.byId("MoviesGrid"));
            this.tabs.on('tabsactivate', (e, i) => {
                this.arrange();
            });
        }

        protected afterLoadEntity() {
            super.afterLoadEntity();

            this.moviesGrid.personID = this.entityId;
        }


    }
}