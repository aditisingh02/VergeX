# Verge - Your Palette,Perfected

**_Pick a mood. Paint your story. Make every pixel count._**

Verge is a modern color palette generator designed to help you create beautiful, accessible, and harmonious color schemes for any design project. It utilizes established color theory principles (like complementary, analogous, triadic, and split-complementary) and provides real-time WCAG accessibility checks, previews on real UI components, support for color blindness simulation, and multiple export formats (CSS, Tailwind, JSON, Figma). Verge makes it easy for designers and developers of all levels to generate, customize, and apply palettes that are both visually appealing and inclusive.

<img width="1919" height="878" alt="image" src="https://github.com/user-attachments/assets/3ba4f952-ecba-4796-85d1-ced7d868b0c3" />

**Key Highlights:**

- Generate scientifically-backed color harmonies using proven color theory principles
- Real-time accessibility validation with WCAG 2.1 compliance checking
- Professional export formats ready for production use across design tools and frameworks
- Comprehensive colorblind simulation to ensure inclusive design
- Curated theme presets from popular design systems
- Educational blog content covering color theory and accessibility best practices
- **🌍 Multi-language support with 40+ languages using Google Translate integration**

## Features

### Color Generation

- **Intelligent Palette Creation**: Generate harmonious color schemes using advanced color theory
- **Multiple Harmony Types**: Analogous, complementary, triadic, and split-complementary schemes
- **Flexible Input**: Support for HEX, RGB, HSL, and color names
- **Real-time Preview**: See colors applied instantly to UI components
- **Color Manipulation**: Fine-tune hue, saturation, and lightness

### Accessibility First

- **WCAG 2.1 Compliance**: Real-time contrast ratio validation
- **AA/AAA Standards**: Visual indicators for accessibility compliance levels
- **Colorblind Support**: Simulate different types of color vision deficiency
- **Accessibility Insights**: Get recommendations for improving color accessibility
- **Text Readability**: Ensure sufficient contrast for all text elements

### Theme Presets

- **Curated Collections**: Material Design, Tailwind CSS, iOS, and Neumorphism presets
- **One-Click Application**: Instantly apply professional color schemes
- **Custom Themes**: Create, save, and manage your own color palettes
- **Theme Categories**: Organized by style, mood, and use case

### Export & Integration

- **Multiple Formats**: JSON, CSS variables, SCSS, Tailwind config, and Figma tokens
- **Developer Ready**: Copy to clipboard or download as files
- **Production Optimized**: Clean, formatted code ready for implementation
- **Framework Support**: Export formats for popular design systems

### User Experience

- **Modern Interface**: Clean, intuitive design with smooth animations
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dark/Light Modes**: Toggle between themes for comfortable viewing
- **Keyboard Navigation**: Full accessibility support
- **Performance**: Lightning-fast with static generation and optimized assets
- **🌍 Multi-language Support**: Translate the entire website into 40+ languages including Spanish, French, German, Chinese, Japanese, Hindi, Arabic, and more

### Internationalization

- **40+ Languages**: Comprehensive language support using Google Translate API
- **Persistent Selection**: User's language preference is saved automatically
- **Beautiful UI**: Flag emojis and native language names for easy recognition
- **Real-time Translation**: Instant translation of all content
- **Zero Configuration**: Works out of the box with no setup required

> 📖 See [TRANSLATION_QUICKSTART.md](TRANSLATION_QUICKSTART.md) for quick setup guide
> 
> 📚 See [TRANSLATION_SETUP.md](TRANSLATION_SETUP.md) for complete documentation

### Blog & Resources

- **Design Insights**: Learn color theory and best practices
- **Markdown Support**: Rich content with proper formatting
- **Interactive Examples**: See color principles in action
- **Accessibility Guides**: Comprehensive accessibility information

### Installation

1. Clone the repository:

```bash
git clone https://github.com/aditisingh02/verge.git
cd verge
```

```bash
git clone git@github.com:aditisingh02/verge.git
cd verge
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
verge/
├── app/                    # Next.js App Router
├── components/
│   ├── ui/
│   ├── palette/           # Color palette components
│   ├── preview/           # Live preview components
│   ├── accessibility/     # Accessibility check
│   ├── presets/          # Theme presets
│   └── export/           # Exports for different formats
├── lib/
│   ├── color/            # Color processing
│   ├── export/           # generate export format
│   ├── presets/          # Theme presets
│   └── utils/            # Utility functions
├── types/                # TypeScript type definitions
└── hooks/
```

## Usage

1. **Generate a Palette**: Enter a base color and select a harmony type
2. **Preview**: See colors applied to UI components
3. **Check Accessibility**: Review WCAG compliance for color combinations
4. **Export**: Download or copy palette in preferred format
5. **Save**: Store palettes for future use

## Contributing

Contributions are accepted. Submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/FeatureName`)
3. Commit your changes (`git commit -m 'Add FeatureName'`)
4. Push to the branch (`git push origin feature/FeatureName`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments
Accessibility guidelines from WCAG 2.1
