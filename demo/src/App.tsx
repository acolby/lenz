"use client";

import { useState } from "react";

export default function LenzDemo(props: { toggleLenzOverlay: () => void }) {
  const [selectedTab, setSelectedTab] = useState("overview");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header
        data-lenz="main-header"
        className="bg-white shadow-sm border-b"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div
              data-lenz="logo"
              className="flex items-center"
            >
              <div className="w-8 h-8 bg-blue-600 rounded-lg mr-3"></div>
              <span className="text-xl font-bold text-gray-900">Lenz Demo</span>
            </div>

            <nav
              data-lenz="main-navigation"
              className="hidden md:flex space-x-8"
            >
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Features
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        data-lenz="hero-section"
        data-lenz-type="Component"
        className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            data-lenz="hero-title"
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Welcome to Lenz Demo
          </h1>
          <p
            data-lenz="hero-subtitle"
            className="text-xl md:text-2xl mb-8 text-blue-100"
          >
            Discover how our overlay tool identifies every component on your
            page
          </p>
          <div
            data-lenz="hero-cta-group"
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              data-lenz="primary-cta"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors animate-pulse"
              onClick={props.toggleLenzOverlay}
            >
              Open Lenz Overlay
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        data-lenz="stats-section"
        className="py-16 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div
              data-lenz="stat-card"
              className="text-center"
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">10K+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime</div>
            </div>
            <div
              data-lenz="stat-card"
              className="text-center"
            >
              <div
                data-lenz="stat-number"
                className="text-3xl font-bold text-blue-600 mb-2"
              >
                24/7
              </div>
              <div
                data-lenz="stat-label"
                className="text-gray-600"
              >
                Support
              </div>
            </div>
            <div
              data-lenz="stat-card"
              className="text-center"
            >
              <div
                data-lenz="stat-number"
                className="text-3xl font-bold text-blue-600 mb-2"
              >
                150+
              </div>
              <div
                data-lenz="stat-label"
                className="text-gray-600"
              >
                Countries
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        data-lenz="features-section"
        className="py-16 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            data-lenz="section-header"
            className="text-center mb-12"
          >
            <h2
              data-lenz="section-title"
              className="text-3xl font-bold text-gray-900 mb-4"
            >
              Amazing Features
            </h2>
            <p
              data-lenz="section-description"
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Discover the powerful features that make our platform the best
              choice for your needs.
            </p>
          </div>

          <div
            data-lenz="features-grid"
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div
              data-lenz="feature-card-1"
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <div
                data-lenz="feature-icon"
                className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
              >
                <div className="w-6 h-6 bg-blue-600 rounded"></div>
              </div>
              <h3
                data-lenz="feature-title"
                className="text-xl font-semibold text-gray-900 mb-2"
              >
                Easy Integration
              </h3>
              <p
                data-lenz="feature-description"
                className="text-gray-600"
              >
                Seamlessly integrate with your existing workflow in just a few
                clicks.
              </p>
            </div>

            <div
              data-lenz="feature-card-2"
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <div
                data-lenz="feature-icon"
                className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4"
              >
                <div className="w-6 h-6 bg-green-600 rounded"></div>
              </div>
              <h3
                data-lenz="feature-title"
                className="text-xl font-semibold text-gray-900 mb-2"
              >
                Real-time Analytics
              </h3>
              <p
                data-lenz="feature-description"
                className="text-gray-600"
              >
                Get instant insights with our powerful real-time analytics
                dashboard.
              </p>
            </div>

            <div
              data-lenz="feature-card-3"
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <div
                data-lenz="feature-icon"
                className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4"
              >
                <div className="w-6 h-6 bg-purple-600 rounded"></div>
              </div>
              <h3
                data-lenz="feature-title"
                className="text-xl font-semibold text-gray-900 mb-2"
              >
                Secure & Reliable
              </h3>
              <p
                data-lenz="feature-description"
                className="text-gray-600"
              >
                Enterprise-grade security with 99.9% uptime guarantee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section
        data-lenz="tabs-section"
        className="py-16 bg-white"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-lenz="tabs-container">
            <div
              data-lenz="tab-navigation"
              className="flex border-b border-gray-200 mb-8"
            >
              {["overview", "features", "pricing"].map((tab) => (
                <button
                  key={tab}
                  data-lenz={`tab-${tab}`}
                  onClick={() => setSelectedTab(tab)}
                  className={`px-6 py-3 font-medium capitalize ${
                    selectedTab === tab
                      ? "border-b-2 border-blue-600 text-blue-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div
              data-lenz="tab-content"
              className="min-h-[200px]"
            >
              {selectedTab === "overview" && (
                <div data-lenz="overview-content">
                  <h3 className="text-2xl font-bold mb-4">Product Overview</h3>
                  <p className="text-gray-600 mb-4">
                    Our platform provides comprehensive solutions for modern
                    businesses.
                  </p>
                  <ul
                    data-lenz="feature-list"
                    className="space-y-2"
                  >
                    <li
                      data-lenz="feature-item"
                      className="flex items-center"
                    >
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      Advanced analytics and reporting
                    </li>
                    <li
                      data-lenz="feature-item"
                      className="flex items-center"
                    >
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      Real-time collaboration tools
                    </li>
                    <li
                      data-lenz="feature-item"
                      className="flex items-center"
                    >
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      Enterprise-grade security
                    </li>
                  </ul>
                </div>
              )}
              {selectedTab === "features" && (
                <div data-lenz="features-content">
                  <h3 className="text-2xl font-bold mb-4">Key Features</h3>
                  <div
                    data-lenz="features-grid"
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  >
                    <div
                      data-lenz="feature-item"
                      className="p-4 border rounded-lg"
                    >
                      <h4 className="font-semibold mb-2">Dashboard</h4>
                      <p className="text-gray-600">
                        Comprehensive overview of all your data
                      </p>
                    </div>
                    <div
                      data-lenz="feature-item"
                      className="p-4 border rounded-lg"
                    >
                      <h4 className="font-semibold mb-2">API Access</h4>
                      <p className="text-gray-600">
                        Full REST API for custom integrations
                      </p>
                    </div>
                  </div>
                </div>
              )}
              {selectedTab === "pricing" && (
                <div data-lenz="pricing-content">
                  <h3 className="text-2xl font-bold mb-4">Pricing Plans</h3>
                  <div
                    data-lenz="pricing-cards"
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                  >
                    <div
                      data-lenz="pricing-card-basic"
                      className="p-6 border rounded-lg"
                    >
                      <h4 className="font-semibold mb-2">Basic</h4>
                      <div
                        data-lenz="price"
                        className="text-2xl font-bold mb-4"
                      >
                        $9/mo
                      </div>
                      <p className="text-gray-600">Perfect for small teams</p>
                    </div>
                    <div
                      data-lenz="pricing-card-pro"
                      className="p-6 border-2 border-blue-600 rounded-lg"
                    >
                      <h4 className="font-semibold mb-2">Pro</h4>
                      <div
                        data-lenz="price"
                        className="text-2xl font-bold mb-4"
                      >
                        $29/mo
                      </div>
                      <p className="text-gray-600">
                        Best for growing businesses
                      </p>
                    </div>
                    <div
                      data-lenz="pricing-card-enterprise"
                      className="p-6 border rounded-lg"
                    >
                      <h4 className="font-semibold mb-2">Enterprise</h4>
                      <div
                        data-lenz="price"
                        className="text-2xl font-bold mb-4"
                      >
                        Custom
                      </div>
                      <p className="text-gray-600">For large organizations</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section
        data-lenz="contact-section"
        className="py-16 bg-gray-50"
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            data-lenz="contact-header"
            className="text-center mb-8"
          >
            <h2
              data-lenz="contact-title"
              className="text-3xl font-bold text-gray-900 mb-4"
            >
              Get in Touch
            </h2>
            <p
              data-lenz="contact-description"
              className="text-lg text-gray-600"
            >
              Have questions? We'd love to hear from you.
            </p>
          </div>

          <form
            data-lenz="contact-form"
            className="bg-white p-8 rounded-lg shadow-sm"
          >
            <div
              data-lenz="form-group"
              className="mb-6"
            >
              <label
                data-lenz="form-label"
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Name
              </label>
              <input
                data-lenz="name-input"
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Your name"
              />
            </div>

            <div
              data-lenz="form-group"
              className="mb-6"
            >
              <label
                data-lenz="form-label"
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                data-lenz="email-input"
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="your@email.com"
              />
            </div>

            <div
              data-lenz="form-group"
              className="mb-6"
            >
              <label
                data-lenz="form-label"
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Message
              </label>
              <textarea
                data-lenz="message-textarea"
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Your message..."
              />
            </div>

            <button
              data-lenz="submit-button"
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Progress and Badges Section */}
      <section
        data-lenz="progress-section"
        className="py-16 bg-white"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            data-lenz="progress-title"
            className="text-2xl font-bold text-center mb-8"
          >
            Our Progress
          </h2>

          <div
            data-lenz="progress-container"
            className="space-y-6"
          >
            <div data-lenz="progress-item">
              <div className="flex justify-between mb-2">
                <span
                  data-lenz="progress-label"
                  className="text-sm font-medium text-gray-700"
                >
                  Development
                </span>
                <span
                  data-lenz="progress-percentage"
                  className="text-sm text-gray-500"
                >
                  85%
                </span>
              </div>
              <div
                data-lenz="progress-bar"
                className="w-full bg-gray-200 rounded-full h-2"
              >
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>

            <div data-lenz="progress-item">
              <div className="flex justify-between mb-2">
                <span
                  data-lenz="progress-label"
                  className="text-sm font-medium text-gray-700"
                >
                  Testing
                </span>
                <span
                  data-lenz="progress-percentage"
                  className="text-sm text-gray-500"
                >
                  70%
                </span>
              </div>
              <div
                data-lenz="progress-bar"
                className="w-full bg-gray-200 rounded-full h-2"
              >
                <div
                  className="bg-green-600 h-2 rounded-full"
                  style={{ width: "70%" }}
                ></div>
              </div>
            </div>

            <div data-lenz="progress-item">
              <div className="flex justify-between mb-2">
                <span
                  data-lenz="progress-label"
                  className="text-sm font-medium text-gray-700"
                >
                  Deployment
                </span>
                <span
                  data-lenz="progress-percentage"
                  className="text-sm text-gray-500"
                >
                  45%
                </span>
              </div>
              <div
                data-lenz="progress-bar"
                className="w-full bg-gray-200 rounded-full h-2"
              >
                <div
                  className="bg-purple-600 h-2 rounded-full"
                  style={{ width: "45%" }}
                ></div>
              </div>
            </div>
          </div>

          <div
            data-lenz="badges-container"
            className="mt-12 text-center"
          >
            <h3
              data-lenz="badges-title"
              className="text-xl font-semibold mb-6"
            >
              Status Badges
            </h3>
            <div
              data-lenz="badges-grid"
              className="flex flex-wrap justify-center gap-4"
            >
              <span
                data-lenz="badge-success"
                className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium"
              >
                Active
              </span>
              <span
                data-lenz="badge-warning"
                className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium"
              >
                Pending
              </span>
              <span
                data-lenz="badge-info"
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
              >
                In Progress
              </span>
              <span
                data-lenz="badge-error"
                className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium"
              >
                Error
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Table Section */}
      <section
        data-lenz="table-section"
        className="py-16 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            data-lenz="table-title"
            className="text-2xl font-bold text-center mb-8"
          >
            Data Table
          </h2>

          <div
            data-lenz="table-container"
            className="bg-white rounded-lg shadow-sm overflow-hidden"
          >
            <table
              data-lenz="data-table"
              className="w-full"
            >
              <thead
                data-lenz="table-header"
                className="bg-gray-50"
              >
                <tr>
                  <th
                    data-lenz="table-header-cell"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    data-lenz="table-header-cell"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    data-lenz="table-header-cell"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Role
                  </th>
                  <th
                    data-lenz="table-header-cell"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody
                data-lenz="table-body"
                className="bg-white divide-y divide-gray-200"
              >
                <tr data-lenz="table-row">
                  <td
                    data-lenz="table-cell"
                    className="px-6 py-4 whitespace-nowrap"
                  >
                    <div className="flex items-center">
                      <div
                        data-lenz="user-avatar"
                        className="w-8 h-8 bg-blue-500 rounded-full mr-3"
                      ></div>
                      <span className="text-sm font-medium text-gray-900">
                        John Doe
                      </span>
                    </div>
                  </td>
                  <td
                    data-lenz="table-cell"
                    className="px-6 py-4 whitespace-nowrap"
                  >
                    <span
                      data-lenz="status-badge"
                      className="px-2 py-1 text-xs font-semibold bg-green-100 text-green-800 rounded-full"
                    >
                      Active
                    </span>
                  </td>
                  <td
                    data-lenz="table-cell"
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                  >
                    Admin
                  </td>
                  <td
                    data-lenz="table-cell"
                    className="px-6 py-4 whitespace-nowrap text-sm font-medium"
                  >
                    <button
                      data-lenz="edit-button"
                      className="text-blue-600 hover:text-blue-900 mr-4"
                    >
                      Edit
                    </button>
                    <button
                      data-lenz="delete-button"
                      className="text-red-600 hover:text-red-900"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
                <tr data-lenz="table-row">
                  <td
                    data-lenz="table-cell"
                    className="px-6 py-4 whitespace-nowrap"
                  >
                    <div className="flex items-center">
                      <div
                        data-lenz="user-avatar"
                        className="w-8 h-8 bg-purple-500 rounded-full mr-3"
                      ></div>
                      <span className="text-sm font-medium text-gray-900">
                        Jane Smith
                      </span>
                    </div>
                  </td>
                  <td
                    data-lenz="table-cell"
                    className="px-6 py-4 whitespace-nowrap"
                  >
                    <span
                      data-lenz="status-badge"
                      className="px-2 py-1 text-xs font-semibold bg-yellow-100 text-yellow-800 rounded-full"
                    >
                      Pending
                    </span>
                  </td>
                  <td
                    data-lenz="table-cell"
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                  >
                    User
                  </td>
                  <td
                    data-lenz="table-cell"
                    className="px-6 py-4 whitespace-nowrap text-sm font-medium"
                  >
                    <button
                      data-lenz="edit-button"
                      className="text-blue-600 hover:text-blue-900 mr-4"
                    >
                      Edit
                    </button>
                    <button
                      data-lenz="delete-button"
                      className="text-red-600 hover:text-red-900"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        data-lenz="main-footer"
        className="bg-gray-900 text-white py-12"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            data-lenz="footer-content"
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            <div data-lenz="footer-brand">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg mr-3"></div>
                <span className="text-xl font-bold">Lenz Demo</span>
              </div>
              <p
                data-lenz="footer-description"
                className="text-gray-400"
              >
                Building the future of component identification and overlay
                tools.
              </p>
            </div>

            <div data-lenz="footer-links-product">
              <h3
                data-lenz="footer-heading"
                className="text-lg font-semibold mb-4"
              >
                Product
              </h3>
              <ul
                data-lenz="footer-list"
                className="space-y-2"
              >
                <li>
                  <a
                    data-lenz="footer-link"
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    data-lenz="footer-link"
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    data-lenz="footer-link"
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Documentation
                  </a>
                </li>
              </ul>
            </div>

            <div data-lenz="footer-links-company">
              <h3
                data-lenz="footer-heading"
                className="text-lg font-semibold mb-4"
              >
                Company
              </h3>
              <ul
                data-lenz="footer-list"
                className="space-y-2"
              >
                <li>
                  <a
                    data-lenz="footer-link"
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    data-lenz="footer-link"
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    data-lenz="footer-link"
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div data-lenz="footer-newsletter">
              <h3
                data-lenz="footer-heading"
                className="text-lg font-semibold mb-4"
              >
                Newsletter
              </h3>
              <p
                data-lenz="newsletter-description"
                className="text-gray-400 mb-4"
              >
                Stay updated with our latest news.
              </p>
              <div
                data-lenz="newsletter-form"
                className="flex"
              >
                <input
                  data-lenz="newsletter-input"
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <button
                  data-lenz="newsletter-button"
                  className="bg-blue-600 px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div
            data-lenz="footer-bottom"
            className="border-t border-gray-800 mt-8 pt-8 text-center"
          >
            <p
              data-lenz="copyright"
              className="text-gray-400"
            >
              © 2024 Lenz Demo. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
