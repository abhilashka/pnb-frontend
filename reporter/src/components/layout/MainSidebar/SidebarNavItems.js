import React from "react";
import { Nav } from "shards-react";

import SidebarNavItem from "./SidebarNavItem";
import { Store } from "../../../flux";

class SidebarNavItems extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      navItems: Store.getSidebarItems(),
    };

    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    Store.addChangeListener(this.onChange);

  }

  componentWillUnmount() {
    Store.removeChangeListener(this.onChange);
  }

  onChange() {
    this.setState({
      ...this.state,
      navItems: Store.getSidebarItems()
    });


  }

  render() {
    const { navItems: items } = this.state;
    return (
      <div className="nav-wrapper">
        <Nav className="nav--no-borders flex-column">
          {sessionStorage['type']=='REP'  && items.map((item, idx) => (
            <SidebarNavItem key={idx} item={item} />
          ))}

          {sessionStorage['type']=='RED' &&
            items.filter(
              (item, i) => item.title != 'Add New News').map((item, i) => <SidebarNavItem key={i} item={item} />)
          }

        </Nav>
      </div>
    )
  }
}

export default SidebarNavItems;
