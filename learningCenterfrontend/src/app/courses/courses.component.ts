import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  eventParent: null/*reffrence to parent element of the event, so we can remove active class
  of the children at any time we want*/
  categories: { id: string, name: string, childs: any }[] = [
      {'name': 'Computer Programming', 'id': '43', 'childs': [
          {'name': 'Java', 'id': '1', 'childs': null},
          {'name': 'C++', 'id': '3', 'childs': null}
      ]}, 
      {'name': 'Web designing', 'id': '56', 'childs': [
          {'name': 'Java', 'id': '1', 'childs': null},
          {'name': 'C++', 'id': '3', 'childs': null},
          {'name': 'Java', 'id': '1', 'childs': null},
          {'name': 'C++', 'id': '3', 'childs': null}
      ]}, 
      {'name': 'Mobile development', 'id': '78', 'childs': [
          {'name': 'Java', 'id': '1', 'childs': null},
          {'name': 'C++', 'id': '3', 'childs': null},
          {'name': 'Java', 'id': '1', 'childs': null},
          {'name': 'C++', 'id': '3', 'childs': null},
          {'name': 'Java', 'id': '1', 'childs': null},
          {'name': 'C++', 'id': '3', 'childs': null},
          {'name': 'Java', 'id': '1', 'childs': null},
          {'name': 'C++', 'id': '3', 'childs': null}
      ]}
  ]
  showedCategories: any
  categoriesHeader = 'Course Categories'
  showReturnBtn = false
  selctedPath: string[] = ['All Courses']
  addingLastPath: boolean = false

  constructor() {
  }

  ngOnInit() {
    this.showedCategories = this.categories
  }

  getCategories() {

  }

  selectCat(event, index, catID) {
    this.eventParent = event.target.parentNode;
    /**In the code above, every time a category is selected, we update its parent.
     */

    if (typeof (this.showedCategories[index]) == 'undefined' 
            || this.showedCategories[index].childs == null ) {
        //the below code sets the selected item to active and remove active
        //from its siblings, the reason why I put it here is to only set selected
        //list item active if the category dosen't have children, because if it dose
        //then the element will get removed and replace with another one, so it will
        //be useless to set it.
        //in other words (only set active if no more children exist)
        $(event.target)
        .addClass('active')
        .siblings()
        .removeClass('active')
        
        //only add/change last path
        this.lastBreadcrumb(this.showedCategories[index].name)

        return;
    }
    
    //add another path
    this.addBreadcrumb(this.showedCategories[index].name)

    this.showedCategories = this.showedCategories[index].childs;
    this.categoriesHeader = this.categories[index].name;
    this.showReturnBtn = true;
  }

  showMainCatagories() {
    this.removeActive()

    this.showedCategories = this.categories;
    this.categoriesHeader = 'Course Categories';
    this.showReturnBtn = false;

    this.resetBreadcrumb();
  }

  removeActive() {
      /*this function remove all active class in the <a> tag */
      $(this.eventParent)
          .find('a')
          .removeClass('active')
  }

  resetBreadcrumb() {
    this.addingLastPath = false;
    this.selctedPath = ['All Courses'];
  }

  addBreadcrumb(value) {
      this.addingLastPath = false;
      this.selctedPath.push(value);
  }

  lastBreadcrumb(value) {
      if (!this.addingLastPath) {
          this.selctedPath.push(value);
      } else {
          this.selctedPath = this.selctedPath.splice(0, (this.selctedPath.length - 1));
          this.selctedPath.push(value);
          //this.selctedPath[this.selctedPath.length - 1] = value;
      }
      this.addingLastPath = true;
  }

  selectThisBreadcrumbPath(index) {
      this.selctedPath = this.selctedPath.slice(0, index + 1);
      this.addingLastPath = false;
      
      if(index == 0) {
          this.showMainCatagories();
      } else {
        this.removeActive();
      }
  }

}
