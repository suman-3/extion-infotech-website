"use client"
import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { useState } from 'react'

const pricingPlans = [
  {
    name: 'Basic',
    description: 'Ideal for small businesses and startups, our Basic Plan provides essential tools and support to get you started on the right foot.',
    monthlyPrice: 239,
    annualPrice: 20000,
    link: 'mailto:info@extioninfotech.com',
    features: [
      'Starter Features',
      'Access To Essential Tools',
      '24/7 Customer Support',
      'Regular Updates',
      'Direct Inquiry for Pricing',
      'Technical SEO analysis and Reports',
    ],
  },
  {
    name: 'Professional',
    description:
      'Our Standard Plan is perfect for growing businesses that need enhanced performance and additional customization options.',
    monthlyPrice: 418,
    annualPrice: 35000,
    link: 'mailto:info@extioninfotech.com',
    features: [
      'Everything in Basic plan',
      'Advanced Features',
      'Enhanced Performance',
      'Premium support',
      'Customization Options',
      'SEO Agent',
    ],
  },
  {
    name: 'Premium',
    description:
      'For businesses that require the full suite of feature our Pro Plan delivers the highest level of service and customization.',
    monthlyPrice: 539,
    annualPrice: 45000,
    link: 'mailto:info@extioninfotech.com',
    features: [
      'Everything in Professional plan',
      'Cutting-Edge Technology',
      'Priority Support',
      'Advanced Customization',
    ],
  },
]

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<'M' | 'A'>('M')

  const Heading = () => (
    <div className="relative z-10 my-12 flex flex-col items-center justify-center gap-4 px-5 md:px-0">
      <div className="flex w-full flex-col items-start justify-center space-y-4 md:items-center">
        <p className="mt-2 text-4xl md:text-5xl font-bold tracking-tight text-gray-800 sm:text-4xl dark:text-gray-200">
          Fair pricing, unfair advantage
        </p>
        <p className="text-md max-w-2xl text-gray-700 md:text-center dark:text-gray-300">
        Currently all pricing are only provided after enquiry.
        </p>
      </div>
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={() => setBillingCycle('M')}
          className={cn(
            `rounded-lg px-4 py-2 text-sm font-medium `,
            billingCycle === 'M'
              ? 'relative bg-white text-black  '
              : 'text-gray-700 hover:bg-white dark:text-gray-300 dark:hover:text-black',
          )}
        >
          Monthly
          {billingCycle === 'M' && <BackgroundShift shiftKey="monthly" />}
        </button>
        <button
          onClick={() => setBillingCycle('A')}
          className={cn(
            `rounded-lg px-4 py-2 text-sm font-medium `,
            billingCycle === 'A'
              ? 'relative bg-white text-black'
              : 'text-gray-700 hover:bg-white dark:text-gray-300 dark:hover:text-black',
          )}
        >
          Annual
          {billingCycle === 'A' && <BackgroundShift shiftKey="annual" />}
        </button>
      </div>
    </div>
  )

  const PricingCards = () => (
    <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-8 lg:flex-row lg:gap-4 px-5 md:px-0">
      {pricingPlans.map((plan, index) => (
        <div
          key={index}
          className="w-full rounded-xl border-[1px] border-gray-500 p-6 text-left dark:border-gray-400"
        >
          <p className="mb-1 mt-0 text-sm font-medium uppercase text-black dark:text-white">
            {plan.name}
          </p>
          <p className="my-0 mb-6 text-sm text-gray-600">{plan.description}</p>
          <div className="mb-8 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={billingCycle === 'M' ? 'monthly' : 'annual'}
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 100 }}
                className="my-0 text-3xl font-semibold text-gray-900 dark:text-gray-100"
              >
                <span>
                  ${billingCycle === 'M' ? plan.monthlyPrice : plan.annualPrice}
                </span>
                <span className="text-sm font-medium">
                  /{billingCycle === 'M' ? 'month' : 'year'}
                </span>
              </motion.p>
            </AnimatePresence>
            <motion.button
              whileTap={{ scale: 0.985 }}
              onClick={() => {
                window.open(plan.link)
              }}
              className="mt-8 w-full rounded-lg bg-text py-2 text-sm font-medium text-white dark:text-black bg-black dark:bg-white hover:bg-white transition-all duration-200 ease-in-out"
            >
              Enquire Now
            </motion.button>
          </div>
          {plan.features.map((feature, idx) => (
            <div key={idx} className="mb-3 flex items-center gap-2">
              <Check className="text-black dark:text-white" size={18} />
              <span className="text-sm text-gray-500 dark:text-gray-300">{feature}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  )

  return (
    <section className="relative w-full overflow-hidden pb-10">
      <Heading />
      <PricingCards />
    </section>
  )
}

const BackgroundShift = ({ shiftKey }: { shiftKey: string }) => (
  <motion.span
    key={shiftKey}
    layoutId="bg-shift"
    className="absolute inset-0 -z-10 rounded-lg bg-white/80"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    transition={{ type: 'spring', stiffness: 200, damping: 20 }}
  />
)

export default function PricingPage() {
  return <Pricing />
}