import React from 'react';
import { Link } from 'gatsby';
import { rhythm } from '../utils/typography';

export const Categories = {
  ARTICLE: 'article',
  PROJECT: 'project',
  JOB: 'job',
};

class Header extends React.Component {
  state = {
    selectedCategories: [],
  };
  selectedStyle = {
    marginRight: '40px',
    boxShadow: 'none',
    textDecoration: 'underline',
  };
  unselectedStyle = { boxShadow: 'none', marginRight: '40px' };

  onClickCategory = category => {
    let selectedCategories = this.state.selectedCategories;
    switch (category) {
      case Categories.ARTICLE:
        if (selectedCategories.includes(Categories.ARTICLE)) {
          selectedCategories = selectedCategories.filter(
            category => category !== Categories.ARTICLE
          );
        } else {
          selectedCategories.push(Categories.ARTICLE);
        }
        break;
      case Categories.PROJECT:
        if (selectedCategories.includes(Categories.PROJECT)) {
          selectedCategories = selectedCategories.filter(
            category => category !== Categories.PROJECT
          );
        } else {
          selectedCategories.push(Categories.PROJECT);
        }
        break;
      case Categories.JOB:
        if (selectedCategories.includes(Categories.JOB)) {
          selectedCategories = selectedCategories.filter(
            category => category !== Categories.JOB
          );
        } else {
          selectedCategories.push(Categories.JOB);
        }
        break;
      default:
        console.error('Arthur, I think you forgot a category here!');
    }

    this.props.updateSelectedCategories(selectedCategories);
    this.setState({ selectedCategories });
  };

  render() {
    return (
      <h3
        style={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: rhythm(1),
          marginBottom: rhythm(1 / 4),
        }}
      >
        <Link
          style={
            this.state.selectedCategories.includes(Categories.ARTICLE)
              ? this.selectedStyle
              : this.unselectedStyle
          }
          rel="bookmark"
          to=""
          onClick={() => {
            this.onClickCategory(Categories.ARTICLE);
          }}
        >
          Articles
        </Link>
        <Link
          style={
            this.state.selectedCategories.includes(Categories.PROJECT)
              ? this.selectedStyle
              : this.unselectedStyle
          }
          to=""
          rel="bookmark"
          onClick={() => {
            this.onClickCategory(Categories.PROJECT);
          }}
        >
          Projects
        </Link>
        <Link
          style={
            this.state.selectedCategories.includes(Categories.JOB)
              ? this.selectedStyle
              : this.unselectedStyle
          }
          to=""
          rel="bookmark"
          onClick={() => {
            this.onClickCategory(Categories.JOB);
          }}
        >
          Jobs
        </Link>
      </h3>
    );
  }
}

export default Header;
