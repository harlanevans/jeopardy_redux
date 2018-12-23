import React, { Fragment, Link } from 'react';
import { Header, Card, Container, Grid, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getCategories } from '../reducers/categories';

class Categories extends React.Component {

  componentDidMount() {
    this.props.dispatch(getCategories())
  };

  categories = () => {
    return this.props.categories.map(category => (
      <Grid key={category.id}>
        <Card.Content>
          <Card.Header>{category.name}</Card.Header>
          <Card.Meta>

          </Card.Meta>
        </Card.Content>
      </Grid>
    ))
  }


  render() {
    return (
            this.props.categories.map(category => (
      <Fragment>
          <Container>
              <Header as='h1'
              textAlign='center'>{category.name}</Header>
              <br />
            <Grid columns={3} divided>
              <Grid.Row stretched>
                <Grid.Column>
                  <Segment>
                    questoin
                  </Segment>
                  <Segment>
                    questoin
                  </Segment>
                  <Segment>
                    questoin
                  </Segment>
                </Grid.Column>
                <Grid.Column>
                  <Segment>
                    questoin
                  </Segment>
                  <Segment>
                    questoin
                  </Segment>
                  <Segment>
                    questoin
                  </Segment>
                </Grid.Column>
                <Grid.Column>
                  <Segment>
                    questoin
                  </Segment>
                  <Segment>
                    questoin
                  </Segment>
                  <Segment>
                    questoin
                  </Segment>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <br />
          </Container>
        </Fragment>
      )
      )
    )
  }
}

const mapStateToProps = (state) => {
  return { categories: state.categories, };
}

export default connect(mapStateToProps)(Categories);