import type { Schema, Struct } from '@strapi/strapi';

export interface LayoutContactItem extends Struct.ComponentSchema {
  collectionName: 'components_layout_contact_items';
  info: {
    description: 'Single contact block: icon, title, and a list of text values';
    displayName: 'Contact Item';
    icon: 'phone';
  };
  attributes: {
    icon: Schema.Attribute.Component<'shared.icon', false>;
    texts: Schema.Attribute.Component<'shared.text-item', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutContactUs extends Struct.ComponentSchema {
  collectionName: 'components_layout_contact_us';
  info: {
    description: 'Contact section with info blocks and an embedded map';
    displayName: 'Contact Us';
    icon: 'phone';
  };
  attributes: {
    contactItems: Schema.Attribute.Component<'layout.contact-item', true>;
    latitude: Schema.Attribute.Float;
    longitude: Schema.Attribute.Float;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    description: 'Site footer with N repeatable columns (text or link lists)';
    displayName: 'Footer';
    icon: 'layer';
  };
  attributes: {
    columns: Schema.Attribute.Component<'layout.footer-column', true>;
    copyrightText: Schema.Attribute.String;
  };
}

export interface LayoutFooterColumn extends Struct.ComponentSchema {
  collectionName: 'components_layout_footer_columns';
  info: {
    description: 'One footer column: can contain plain text OR a list of links (use one or the other)';
    displayName: 'Footer Column';
    icon: 'column';
  };
  attributes: {
    links: Schema.Attribute.Component<'shared.link', true>;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface LayoutHero extends Struct.ComponentSchema {
  collectionName: 'components_layout_heroes';
  info: {
    description: 'Full-width hero section with a multi-slide carousel';
    displayName: 'Hero';
    icon: 'dashboard';
  };
  attributes: {
    slides: Schema.Attribute.Component<'layout.hero-slide', true>;
  };
}

export interface LayoutHeroSlide extends Struct.ComponentSchema {
  collectionName: 'components_layout_hero_slides';
  info: {
    description: 'Single slide for the hero slider: background, title, subtitle, and CTA button';
    displayName: 'Hero Slide';
    icon: 'picture';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    backgroundImage: Schema.Attribute.Media<'images'>;
    button: Schema.Attribute.Component<'shared.button', false>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface LayoutMenuDisplay extends Struct.ComponentSchema {
  collectionName: 'components_layout_menu_displays';
  info: {
    description: 'Renders a full menu (categories \u2192 subcategories \u2192 products) from the Menu content type';
    displayName: 'Menu Display';
    icon: 'book';
  };
  attributes: {
    menu: Schema.Attribute.Relation<'oneToOne', 'api::menu.menu'>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface LayoutNavbar extends Struct.ComponentSchema {
  collectionName: 'components_layout_navbars';
  info: {
    description: 'Site navigation bar with logo, links, and language switcher';
    displayName: 'Navbar';
    icon: 'layer';
  };
  attributes: {
    languageDropdown: Schema.Attribute.Component<'shared.dropdown', false>;
    links: Schema.Attribute.Component<'shared.link', true>;
    logo: Schema.Attribute.Media<'images'>;
  };
}

export interface LayoutSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_sections';
  info: {
    description: 'Generic content section with title, subtitle, and a grid of cards';
    displayName: 'Section';
    icon: 'grid';
  };
  attributes: {
    cards: Schema.Attribute.Component<'shared.card', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    description: 'Clickable button with optional icon and custom colors';
    displayName: 'Button';
    icon: 'cursor';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    borderColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    href: Schema.Attribute.String;
    icon: Schema.Attribute.Component<'shared.icon', false>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    target: Schema.Attribute.Enumeration<['_self', '_blank']> &
      Schema.Attribute.DefaultTo<'_self'>;
  };
}

export interface SharedCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_cards';
  info: {
    description: 'Reusable card: can have an image OR icon, plus title, subtitle, and details';
    displayName: 'Card';
    icon: 'layout';
  };
  attributes: {
    details: Schema.Attribute.Text;
    icon: Schema.Attribute.Component<'shared.icon', false>;
    image: Schema.Attribute.Media<'images'>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedDropdown extends Struct.ComponentSchema {
  collectionName: 'components_shared_dropdowns';
  info: {
    description: 'Select dropdown with optional icon (e.g. language switcher)';
    displayName: 'Dropdown';
    icon: 'chevron-down';
  };
  attributes: {
    icon: Schema.Attribute.Component<'shared.icon', false>;
    options: Schema.Attribute.Component<'shared.dropdown-option', true>;
  };
}

export interface SharedDropdownOption extends Struct.ComponentSchema {
  collectionName: 'components_shared_dropdown_options';
  info: {
    description: 'Single option inside a dropdown';
    displayName: 'Dropdown Option';
    icon: 'list';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedIcon extends Struct.ComponentSchema {
  collectionName: 'components_shared_icons';
  info: {
    description: 'Icon identifier (e.g. Heroicons or FontAwesome name)';
    displayName: 'Icon';
    icon: 'star';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    description: 'Navigation link with optional icon and custom styling';
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    href: Schema.Attribute.String & Schema.Attribute.Required;
    icon: Schema.Attribute.Component<'shared.icon', false>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    target: Schema.Attribute.Enumeration<['_self', '_blank']> &
      Schema.Attribute.DefaultTo<'_self'>;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: 'Search engine optimization metadata';
    displayName: 'SEO';
    icon: 'search';
  };
  attributes: {
    canonicalUrl: Schema.Attribute.String;
    keywords: Schema.Attribute.String;
    metaDescription: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
      }>;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: 'Carousel/slider container with a list of cards';
    displayName: 'Slider';
    icon: 'slideshow';
  };
  attributes: {
    cards: Schema.Attribute.Component<'shared.card', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedTextItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_text_items';
  info: {
    description: 'Single text string, used for repeatable lists of text';
    displayName: 'Text Item';
    icon: 'paragraph';
  };
  attributes: {
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'layout.contact-item': LayoutContactItem;
      'layout.contact-us': LayoutContactUs;
      'layout.footer': LayoutFooter;
      'layout.footer-column': LayoutFooterColumn;
      'layout.hero': LayoutHero;
      'layout.hero-slide': LayoutHeroSlide;
      'layout.menu-display': LayoutMenuDisplay;
      'layout.navbar': LayoutNavbar;
      'layout.section': LayoutSection;
      'shared.button': SharedButton;
      'shared.card': SharedCard;
      'shared.dropdown': SharedDropdown;
      'shared.dropdown-option': SharedDropdownOption;
      'shared.icon': SharedIcon;
      'shared.link': SharedLink;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.text-item': SharedTextItem;
    }
  }
}
