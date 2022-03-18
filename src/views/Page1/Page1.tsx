import "./styles.scss";
export const Page1 = () => {
  return (
    <div className="container-fluid ">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 bg-dark sidebar">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <a
              href="/"
              className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none mt-5"
            >
              <span className="fs-5 d-none d-sm-inline">Menu</span>
            </a>
            <ul
              className="nav nav-pills w-100 flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              <li className="nav-item w-100">
                <a href="#" className="nav-link align-middle active">
                  <i className="fs-4 bi-house"></i>
                  <span className="ms-1 d-none d-sm-inline">Home</span>
                </a>
              </li>
              <li className="nav-item w-100">
                <a href="#submenu1" data-bs-toggle="collapse" className="nav-link align-middle ">
                  <i className="fs-4 bi-speedometer2"></i>
                  <span className="ms-1 d-none d-sm-inline">Dashboard</span>
                </a>
                <ul
                  className="collapse show nav flex-column ms-1"
                  id="submenu1"
                  data-bs-parent="#menu"
                >
                  <li className="w-100">
                    <a href="#" className="nav-link">
                      <span className="d-none d-sm-inline">Item</span> 1
                    </a>
                  </li>
                  <li>
                    <a href="#" className="nav-link">
                      <span className="d-none d-sm-inline">Item</span> 2
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item w-100 ">
                <a href="#" className="nav-link align-middle">
                  <i className="fs-4 bi-table"></i>
                  <span className="ms-1 d-none d-sm-inline">Orders</span>
                </a>
              </li>
              <li className="nav-item w-100">
                <a href="#" className="nav-link align-middle ">
                  <i className="fs-4 bi-bootstrap"></i>
                  <span className="ms-1 d-none d-sm-inline">Bootstrap</span>
                </a>
              </li>
              <li className="nav-item w-100">
                <a href="#" className="nav-link align-middle">
                  <i className="fs-4 bi-grid"></i>
                  <span className="ms-1 d-none d-sm-inline">Products</span>
                </a>
              </li>
              <li className="nav-item w-100">
                <a href="#" className="nav-link align-middle">
                  <i className="fs-4 bi-people"></i>
                  <span className="ms-1 d-none d-sm-inline">Customers</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="col mt-5 outlet">
          <h3 className="">
            <strong>Left Sidebar with Submenus</strong>
          </h3>
          <p className="lead">
            An example 2-level sidebar with collasible menu items. The menu functions like an
            "accordion" where only a single menu is be open at a time. While the sidebar itself is
            not toggle-able, it does responsively shrink in width on smaller screens.
          </p>
          <ul className="list-unstyled">
            <li>
              <h5>Responsive</h5> shrinks in width, hides text labels and collapses to icons only on
              mobile
            </li>
            <li>
              <h5>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores enim perferendis
                accusantium ullam at quidem provident, necessitatibus quasi commodi doloribus sunt
                libero, beatae excepturi animi ipsum a. Veniam, eum ipsam. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Iusto deserunt enim veniam odio explicabo facilis
                suscipit dolorum illo voluptates quas, rem impedit possimus dignissimos, optio hic,
                rerum obcaecati neque odit!
              </h5>
            </li>
            <li>
              <h5>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores enim perferendis
                accusantium ullam at quidem provident, necessitatibus quasi commodi doloribus sunt
                libero, beatae excepturi animi ipsum a. Veniam, eum ipsam. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Iusto deserunt enim veniam odio explicabo facilis
                suscipit dolorum illo voluptates quas, rem impedit possimus dignissimos, optio hic,
                rerum obcaecati neque odit!
              </h5>
            </li>
            <li>
              <h5>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores enim perferendis
                accusantium ullam at quidem provident, necessitatibus quasi commodi doloribus sunt
                libero, beatae excepturi animi ipsum a. Veniam, eum ipsam. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Iusto deserunt enim veniam odio explicabo facilis
                suscipit dolorum illo voluptates quas, rem impedit possimus dignissimos, optio hic,
                rerum obcaecati neque odit!
              </h5>
            </li>
            <li>
              <h5>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores enim perferendis
                accusantium ullam at quidem provident, necessitatibus quasi commodi doloribus sunt
                libero, beatae excepturi animi ipsum a. Veniam, eum ipsam. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Iusto deserunt enim veniam odio explicabo facilis
                suscipit dolorum illo voluptates quas, rem impedit possimus dignissimos, optio hic,
                rerum obcaecati neque odit!
              </h5>
            </li>
            <li>
              <h5>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores enim perferendis
                accusantium ullam at quidem provident, necessitatibus quasi commodi doloribus sunt
                libero, beatae excepturi animi ipsum a. Veniam, eum ipsam. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Iusto deserunt enim veniam odio explicabo facilis
                suscipit dolorum illo voluptates quas, rem impedit possimus dignissimos, optio hic,
                rerum obcaecati neque odit!
              </h5>
            </li>
            <li>
              <h5>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores enim perferendis
                accusantium ullam at quidem provident, necessitatibus quasi commodi doloribus sunt
                libero, beatae excepturi animi ipsum a. Veniam, eum ipsam. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Iusto deserunt enim veniam odio explicabo facilis
                suscipit dolorum illo voluptates quas, rem impedit possimus dignissimos, optio hic,
                rerum obcaecati neque odit!
              </h5>
            </li>
            <li>
              <h5>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores enim perferendis
                accusantium ullam at quidem provident, necessitatibus quasi commodi doloribus sunt
                libero, beatae excepturi animi ipsum a. Veniam, eum ipsam. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Iusto deserunt enim veniam odio explicabo facilis
                suscipit dolorum illo voluptates quas, rem impedit possimus dignissimos, optio hic,
                rerum obcaecati neque odit!
              </h5>
            </li>
            <li>
              <h5>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores enim perferendis
                accusantium ullam at quidem provident, necessitatibus quasi commodi doloribus sunt
                libero, beatae excepturi animi ipsum a. Veniam, eum ipsam. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Iusto deserunt enim veniam odio explicabo facilis
                suscipit dolorum illo voluptates quas, rem impedit possimus dignissimos, optio hic,
                rerum obcaecati neque odit!
              </h5>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
