import Button from '../ui/Button';
import './Hero.scss';

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  cta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  overlay?: boolean;
}

export default function Hero({
  title,
  subtitle,
  backgroundImage,
  cta,
  secondaryCta,
  overlay = true,
}: HeroProps) {
  return (
    <section
      className={`hero ${overlay ? 'hero--overlay' : ''}`}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
    >
      <div className="hero__container">
        <div className="hero__content">
          <h1 className="hero__title">{title}</h1>
          {subtitle && <p className="hero__subtitle">{subtitle}</p>}
          {(secondaryCta || cta) && (
            <div className="hero__actions">
              {secondaryCta && (
                <Button variant="outline" size="lg" href={secondaryCta.href}>
                  {secondaryCta.label}
                </Button>
              )}
              {cta && (
                <Button variant="secondary" size="lg" href={cta.href}>
                  {cta.label}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
