import { FiX, FiTrash2, FiPlus, FiMinus, FiShoppingBag } from 'react-icons/fi'

export default function CartDrawer({ open, onClose, items = [], onUpdateQuantity, onRemoveItem, onCheckout }) {
  if (!open) return null

  const subtotal = items.reduce((sum, item) => sum + Number(item.salePrice || item.price || 0) * Number(item.quantity || 1), 0)

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={onClose} />

      <div className="fixed inset-y-0 right-0 flex w-full max-w-md pl-0 sm:pl-6">
        <div className="w-full bg-white shadow-2xl flex flex-col justify-between max-w-full">
          {/* Header */}
          <div className="p-4 sm:p-6 border-b border-black/10 flex items-center justify-between bg-[#111111] text-white">
            <div className="flex items-center gap-3">
              <span className="text-[#D4AF37]">
                <FiShoppingBag size={22} />
              </span>
              <div>
                <h2 className="text-base sm:text-lg font-semibold tracking-wide">Your Shopping Cart</h2>
                <p className="text-xs text-white/60">{items.length} item(s) selected</p>
              </div>
            </div>
            <button onClick={onClose} className="rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20">
              <FiX size={18} />
            </button>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3 sm:space-y-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-[#F8F8F8] text-[#111111]/40 mb-4">
                  <FiShoppingBag size={26} />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-[#111111]">Your cart is empty</h3>
                <p className="mt-2 text-xs sm:text-sm text-[#111111]/60 max-w-xs">Discover our premium eyewear collections and add your favorite frames.</p>
                <button onClick={onClose} className="mt-6 rounded-full bg-[#111111] px-5 py-2.5 sm:px-6 sm:py-3 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] sm:tracking-[0.2em] text-white transition hover:bg-[#D4AF37] hover:text-[#111111]">
                  Explore Shop
                </button>
              </div>
            ) : (
              items.map((item) => {
                const itemPrice = Number(item.salePrice || item.price || 0)
                return (
                  <div key={item.cartItemId || item.id} className="flex gap-3 sm:gap-4 rounded-2xl border border-black/5 bg-[#F8F8F8] p-3 sm:p-4 shadow-sm">
                    {item.image ? (
                      <img src={item.image} alt={item.name} className="h-16 w-16 sm:h-20 sm:w-20 rounded-xl object-cover shrink-0" />
                    ) : (
                      <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-xl bg-black/10 flex items-center justify-center text-[10px] sm:text-xs shrink-0">No image</div>
                    )}
                    <div className="flex-1 flex flex-col justify-between min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <h4 className="font-semibold text-xs sm:text-sm text-[#111111] truncate">{item.name}</h4>
                          <p className="text-[11px] sm:text-xs text-[#111111]/50 truncate">{item.category}</p>
                        </div>
                        <button onClick={() => onRemoveItem?.(item)} title="Remove item" className="text-[#111111]/40 transition hover:text-red-600 shrink-0">
                          <FiTrash2 size={16} />
                        </button>
                      </div>
                      <div className="mt-2 flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5 sm:gap-2 rounded-full bg-white border border-black/10 px-2 py-0.5 sm:py-1">
                          <button onClick={() => onUpdateQuantity?.(item, -1)} className="text-[#111111]/60 hover:text-[#111111] p-0.5">
                            <FiMinus size={12} />
                          </button>
                          <span className="text-xs font-semibold px-1">{item.quantity}</span>
                          <button onClick={() => onUpdateQuantity?.(item, 1)} className="text-[#111111]/60 hover:text-[#111111] p-0.5">
                            <FiPlus size={12} />
                          </button>
                        </div>
                        <p className="font-bold text-xs sm:text-sm text-[#111111]">₹{(itemPrice * item.quantity).toLocaleString('en-IN')}</p>
                      </div>
                    </div>
                  </div>
                )
              })
            )}
          </div>

          {/* Footer Subtotal & Checkout */}
          {items.length > 0 ? (
            <div className="p-4 sm:p-6 border-t border-black/10 bg-white space-y-3 sm:space-y-4">
              <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
                <div className="flex items-center justify-between text-[#111111]/70">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#111111]">₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex items-center justify-between text-[#111111]/70">
                  <span>Shipping</span>
                  <span className="font-semibold text-[#D4AF37]">FREE</span>
                </div>
                <div className="flex items-center justify-between text-sm sm:text-base font-bold text-[#111111] pt-2 border-t border-black/5">
                  <span>Total Amount</span>
                  <span className="text-[#111111]">₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
              </div>
              <button
                onClick={() => {
                  onClose()
                  onCheckout?.()
                }}
                className="w-full rounded-full bg-[#111111] py-3.5 sm:py-4 text-xs font-semibold uppercase tracking-[0.18em] sm:tracking-[0.2em] text-white transition hover:bg-[#D4AF37] hover:text-[#111111] shadow-lg"
              >
                Proceed to Checkout
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}
